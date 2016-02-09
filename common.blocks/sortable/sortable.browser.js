/* global modules:false */

modules.define('sortable',
               ['i-bem__dom', 'jquery', 'dom'],
               function(provide, BEMDOM, $, dom) {

BEMDOM.decl('sortable', {
    onSetMod: {
        'js': {
            'inited': function(){
                //this.setAttrs();
                this._moveThreshold = 2;
            }
        },
        'dragging' : {
            'true' : function(){
                this.bindTo('dragover', this._onDragOver);
            },
            '' : function(){
                this.unbindFrom('dragover', this._onDragOver);
            },
        }
    },

    /**
     * Set draggable attrs to items
     */
    setAttrs: function() {
        this.findElem('item').map(function(item){
            item.attr('draggable', 'true');
        }, this);
    },

    /**
     * Cancel drop
     */
    cancel : function(){
        var parent = this._dragSourcePos.parent,
            index = this._dragSourcePos.index,
            levelChanged = !parent.is(this._dragingElem.parent());

        if(this._dragSourcePos.index > 0){
            var children = parent.children();

            if(children.length <= index) {
                targetElem = parent.children().eq(index -1);
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

    _onDrop: function(e){
        if(!this._validateDrop(e)) {
            this.cancel();
            return;
        }
        e.preventDefault();
        e.stopPropagation();

        var target = this._getRealTarget(e);
        this._sortInsert(this._dragingElem, target);

        this.emit('sortend', {source : this._dragingElem, target : target});
    },

    _sortInsert: function(source, target){
        return this._moveElem(source, target);
    },

    _validateDrop: function(e){
        if(e.originalEvent.dataTransfer.files.length ||
           !dom.contains(this.domElem, $(e.target))){
            return false;
        }
        return true;
    },

    /**
     * Search for 'sortable__item' parent of event target. Useful if drag
     * handler inside `sortable__item` dom
     * @param {Event} e drag event
     * @returns {jQuery} sortable__item domElem
     */
    _getRealTarget: function(e){
        return this.closestElem($(e.target), 'item');
    },

    /**
     * Insert source before or after target
     * @emits sort
     * @param {jQuery} source
     * @param {jQuery} target
     */
    _moveElem : function(source, target){
        if (source.index() > target.index()){
            this.domElem.is(target)?
                this.domElem.prepend(source):
                target.before(source);
        } else {
            this.domElem.is(target)?
                this.domElem.append(source):
                target.after(source);
        }
        this.emit('sort', {source: source, dir: this._lastMoveDir});
    },


    /**
     * @callback
     * @emits move
     */
    _onDrag : function(e){
        var X = e.originalEvent.screenX,
            Y = e.originalEvent.screenY;

        //Object not moved?
        if(this._dragPos.x === X && this._dragPos.y === Y){
            return;
        }

        this.getDragDirection(X, Y);
        this.emit('move', this._lastMoveDir);
        this._dragPos = { x : X, y : Y };
    },

    /**
     * @callback
     * @emits over
     */
    _onDragOver : function(e){

        e.preventDefault();
        var X = e.originalEvent.screenX,
            Y = e.originalEvent.screenY;

        //Object not moved?
        if(this._dragPos.x === X && this._dragPos.y === Y){
            return;
        }
        this.emit('over', e, this._lastMoveDir);

        this._moveElem(this._dragingElem, this._getRealTarget(e));
    },

    /**
     * @callback
     * @emits start
     */
    _onDragStart : function(e){
        this.setMod('dragging');
        this._initDrag(e);
        this.emit('start', this._dragingElem);
    },

    _initDrag: function(e){
        this._dragPos = { x : e.originalEvent.screenX, y : e.originalEvent.screenY };
        this._dragingElem = $(e.target);
        this._dragSourcePos = {
            parent : $(e.target).parent(),
            index : $(e.target).index()
        };
        this.setMod(this._dragingElem, 'moving', true);

        e.originalEvent.dataTransfer.effectAllowed = 'move';
        e.originalEvent.dataTransfer.setData("text", e.target.id);
    },

    /**
     * @callback
     * @emits end
     */
    _onDragEnd : function(e){
        this.delMod('dragging');
        this._dragPos = null;
        this.emit('end');
        this.delMod(this._dragingElem, 'moving');
    },

    getSiblings: function(block){
        return {
            prev : this.findBlockOn(this._dragingElem.next(), block),
            next : this.findBlockOn(this._dragingElem.prev(), block)
        };
    },

    /**
     * detect drag direction
     * @param {int} x current X
     * @param {int} y current y
     * @param {bool} asObj return result as object {x, y}
     */
    getDragDirection : function(x, y, asObj){
        var direction,
            dirX = false, //'left',
            dirY = false, //'top',
            mainX,
            mainDir,
            old = this._dragPos;


        dirX = x > old.x; //right
        dirY = y > old.y; //bottom

        direction =  {
                x : dirX? 'right' : 'left',
                y : dirY? 'bottom': 'top'
            };


        //console.log(x +' '+ old.x + ' '+ Math.abs(x - old.x));
        //console.log(y +' '+ old.y + ' '+ Math.abs(y - old.y));
        mainX = Math.abs(x - old.x) > Math.abs(y - old.y);
        mainDir = mainX? direction.x : direction.y;

        this._lastMoveDir = mainDir;

        return asObj? direction : mainDir;
    },

},{
    live: function() {
        this
            .liveBindTo('dragstart', this.prototype._onDragStart)
            .liveBindTo('drag', this.prototype._onDrag)
            .liveBindTo('drop', this.prototype._onDrop)
            .liveBindTo('dragend', this.prototype._onDragEnd);
    }
});

provide(BEMDOM);

});

