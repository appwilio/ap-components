/* global modules:false */
// @ts-check

modules.define('sortable',
               ['i-bem-dom', 'jquery', 'dom'],
               function(provide, bemDom, $, dom) {

/**
* @typedef {Event} BemDomEvent
* @property {DragEvent} originalEvent
*/

provide(bemDom.declBlock(this.name, {
    onSetMod : {
        'js' : {
            'inited' : function() {
                /**
                 * Текущая позиция перемещаемого элемента
                 * @type {{x: number, y: number}}
                 * @private
                 */
                this._dragPos = { x : NaN, y : NaN };
                /**
                 * Ссылка на перемещаемый элемент
                 * @type {jQuery|null}
                 * @private
                 */
                this._dragingElem = null;
                /**
                 * Исходные данные перемещаемого элемента
                 * @type {{parent: (jQuery|null), index: number}}
                 * @property {jQuery|null} parent родительский элемент
                 * @property {number} index исходный индекс перемещаемого элемента
                 * @private
                 */
                this._dragSourcePos = {
                    parent : null,
                    index : NaN
                };
                /**
                 * Основное направление перемещения элемента
                 * @type {'left'|'right'|'bottom'|'top'}
                 * @private
                 */
                this._lastMoveDir = 'left';

                /**
                 * Целевой DOM элемент
                 * @type {jQuery|null}
                 * @private
                 */
                this._lastTarget = null;
            },
        },
        'dragging' : {
            'true' : function(){
                this._domEvents().on('dragover', this._onDragOver);
            },
            '' : function(){
                this._domEvents().un('dragover', this._onDragOver);
            }
        }
    },

    /**
     * Set draggable attrs to items
     */
    setAttrs : function() {
        this.findChildElems('item').forEach(function(item){
            item.attr('draggable', 'true');
        }, this);
    },

    /**
     * Cancel drop
     */
    cancel : function(){
        if(this._dragSourcePos === undefined)
            return;

        var parent = this._dragSourcePos.parent,
            index = this._dragSourcePos.index,
            levelChanged = !parent.is(this._dragingElem.parent());

        if(this._dragSourcePos.index > 0){
            var children = parent.children(),
                targetElem;

            if(children.length <= index) {
                targetElem = parent.children().eq(index - 1);
                return targetElem.append(this._dragingElem);
            }

            if(levelChanged) {
                targetElem = children.eq(index - 1);
                return targetElem.after(this._dragingElem);
            }

            targetElem = children.eq(index);
            return this._moveElem(this._dragingElem, targetElem);
        }
        return parent.prepend(this._dragingElem);
    },

    /**
     * Обрабатывает drop событие.
     * @callback
     * @param {BemDomEvent} e Event
     * @private
     * @returns void
     */
    _onDrop : function(e){
        if(!this._validateDrop(e)) {
            this.cancel();
            return;
        }
        e.preventDefault();
        e.stopPropagation();

        var target = this._getRealTarget(e);
        if(!target) return;
        this._moveElem(this._getDraggingElem(), target);

        this._emit('sortend', { source : this._dragingElem, target : target });
    },

    /**
     * @param {jQuery} source
     * @param {jQuery} target
     * @private
     * @deprecated
     */
    _sortInsert : function(source, target){
        return this._moveElem(source, target);
    },

    /**
     * Проверяет нужно ли обрабатывать drop событие.
     * Возвращает false если был сброшен файл или событие прошло на другом DOM узле
     * @param {BemDomEvent} e Event
     * @returns {boolean}
     * @private
     */
    _validateDrop : function(e){
        if(e.originalEvent.dataTransfer.files.length ||
           !dom.contains(this.domElem, $(e.target))){
            return false;
        }
        return true;
    },

    /**
     * Search for 'sortable__item' parent of event target. Useful if drag
     * handler inside `sortable__item` dom
     * @param {BemDomEvent} e drag event
     * @returns {jQuery|null} sortable__item domElem
     */
    _getRealTarget : function(e){
        var el = $(e.target)
            .parentsUntil('.sortable__item')
            .last()
            .parent();
        if(el.is(bemDom.doc)) return null;
        return el.length? el : null;
    },

    /**
     * Insert source before or after target
     * @emits sort
     * @param {jQuery} source
     * @param {jQuery} target
     */
    _moveElem : function(source, target){
        if(source.index() > target.index()){
            this.domElem.is(target)?
                this.domElem.prepend(source):
                target.before(source);
        } else {
            this.domElem.is(target)?
                this.domElem.append(source):
                target.after(source);
        }
        this._emit('sort', { source : source, dir : this._lastMoveDir });
    },

    /**
     * Вызывается периодически пока перемещаемый элемент не брошен
     * @url https://developer.mozilla.org/en-US/docs/Web/API/Document/drag_event
     * @callback
     * @emits move
     * @param {BemDomEvent} e
     */
    _onDrag : function(e){
        var X = e.originalEvent.screenX,
            Y = e.originalEvent.screenY,
            savedPosition = this._getDragPosition();

        if(!this._isMoved(X, Y)) return;

        this._lastMoveDir = this.getMainDragDirection(
            this.getDragDirection(X, Y, savedPosition),
            savedPosition
        );
        this._emit('move', this._lastMoveDir);
        this._setDragPosition(X, Y);
    },

    /**
     * Проверяет изменилась ли позиция элемента со времени прошлого события
     * @param {number} x current x position
     * @param {number} y current y position
     * @return {boolean}
     * @protected
     */
    _isMoved : function(x, y) {
        var savedPosition = this._getDragPosition();
        return savedPosition.x !== x || savedPosition.y !== y;
    },

    /**
     * Вызывается когда перетаскиваемый элемент находится над Sortable
     * @protected
     * @url https://developer.mozilla.org/en-US/docs/Web/API/Document/dragover_event
     * @callback
     * @param {BemDomEvent} e
     * @emits over
     */
    _onDragOver : function(e){
        e.preventDefault();
        var X = e.originalEvent.screenX,
            Y = e.originalEvent.screenY;

        if(!this._isMoved(X, Y)) return;

        this._emit('over', e, this._lastMoveDir);
        this._moveElem(this._getDraggingElem(), this._getRealTarget(e));
    },

    /**
     * @callback
     * @emits start
     */
    _onDragStart : function(e){
        this.setMod('dragging');
        this._initDrag(e);
        this._emit('start', this._dragingElem);
    },

    /**
     * Устанавливает необходимые свойства блока во время сортировки.
     * @private
     */
    _initDrag : function(e){
        var elem = $(e.target);
        this._setDragPosition(e.originalEvent.screenX, e.originalEvent.screenY);
        this._setDraggingElem(elem);
        this._setInitialPosition(elem.parent(), elem.index());

        e.originalEvent.dataTransfer.effectAllowed = 'move';
        e.originalEvent.dataTransfer.setData('text', e.target.id);
    },

    /**
     * Сохраняет исходную позицию перемещаемого элемента
     * @param {jQuery} parent
     * @param {number} index
     * @protected
     */
    _setInitialPosition : function(parent, index) {
        this._dragSourcePos = { parent : parent, index : index };
    },

    /**
     * Получает перемещаемый элемент
     * @return {jQuery|null}
     * @protected
     */
    _getDraggingElem : function() {
        return this._dragingElem;
    },

    /**
     * Обновляет ссылку на перемещаемый элемент
     * @param {jQuery} elem
     * @protected
     */
    _setDraggingElem : function(elem) {
        if(!elem) return new Error('Empty element');
        this._dragingElem = elem;
    },

    /**
     * Сбрасывает ссылку на перемещаемый элемент
     * @private
     */
    _resetDraggingElem : function() {
        this._dragingElem = null;
    },

    /**
     * Вызывается когда пользователь отпускает клавишу мыши
     * @url https://developer.mozilla.org/en-US/docs/Web/API/Document/dragend_event
     * @callback
     * @emits 'end'
     */
    _onDragEnd : function(){
        this.delMod('dragging');
        this._resetDragPosition();
        this._emit('end');
    },

    /**
     * @param {Function} block
     * @return {{next, prev}}
     */
    getSiblings : function(block){
        return {
            prev : this._dragingElem.next().bem(block),
            next : this._dragingElem.prev().bem(block)
        };
    },

    /**
     * detect drag direction
     * @param {int} x current X
     * @param {int} y current y
     * @param {{x: Number, y: Number}} prevPosition previous dragging elem position
     * @return {{x: 'right'|'left', y: 'bottom'|'top'}}
     */
    getDragDirection : function(x, y, prevPosition){
        if(prevPosition === true) throw new Error('Call deprecated asObj param');

        return {
            x : x > prevPosition.x? 'right' : 'left',
            y : y > prevPosition.y? 'bottom': 'top'
        };
    },

    /**
     * Detect main move direction
     * @param {{x: 'right'|'left', y: 'bottom'|'top'}} direction dragging directions
     * @param {{x: Number, y: Number}} prevPosition previous dragging element position
     * @return {'right'|'left'|'bottom'|'top'}
     */
    getMainDragDirection : function(direction, prevPosition) {
        return Math.abs(direction.x - prevPosition.x) > Math.abs(direction.y - prevPosition.y)?
            direction.x : direction.y;
    },

    /**
     * Получает сохраненную позицию перемещаемого элемента
     * @return {{x: number, y: number}}
     * @private
     */
    _getDragPosition : function() {
        return this._dragPos;
    },

    /**
     * Обновляет позицию перемещаемого элемента
     * @param {number} x
     * @param {number} y
     * @private
     */
    _setDragPosition : function(x, y) {
        this._dragPos = { x : x, y : y };
    },

    _resetDragPosition : function() {
        this._setDragPosition(NaN, NaN);
    },

}, {
    lazyInit : true,
    onInit : function() {
        this._domEvents()
            .on('dragstart', this.prototype._onDragStart)
            .on('drag', this.prototype._onDrag)
            .on('drop', this.prototype._onDrop)
            .on('dragend', this.prototype._onDragEnd);
    }
}));

});

