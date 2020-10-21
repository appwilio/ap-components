modules.define('sortable', ['i-bem-dom', 'jquery'], function(provide, bemDom, $, Sortable) {

provide(Sortable.declMod({ modName : 'pattern', modVal : 'menu' }, {
    onSetMod : {
        js : {
            inited : function(){
                this.__base.apply(this, arguments);
                this._events().on('sort', this.resetDistance);
            }
        }
    },

    getPlaceholder : function(){
        return this._elem('placeholder');
    },

    _buildPlaceholder : function(){
        bemDom.before(this._dragingElem, '<div class="sortable__placeholder"></div>');
        var w = this._dragingElem.width(),
            h = this._dragingElem.height();

        this._elem('placeholder').domElem.css({ width : w, height : h });
        this._movePlaceholder(this._dragingElem.offset());
    },

    _movePlaceholder : function(offset){
        this._elem('placeholder').domElem.css(offset);
    },

    _sortInsert : function(source){
        bemDom.replace(this._elem('placeholder').domElem, source);
    },

    /**
     * @callback
     * @emits over
     */
    _onDragOver : function(e){
        e.preventDefault();
        var X = e.originalEvent.screenX,
            Y = e.originalEvent.screenY;

        // Object not moved?
        if(this._dragPos.x === X && this._dragPos.y === Y){
            return;
        }

        this._emit('over', this._lastMoveDir);

        this._moveElem(this._elem('placeholder').domElem, this._getRealTarget(e));
        var isPlaceholder = this._elem('placeholder').domElem.is($(e.target));
        if(!isPlaceholder) {
            this._elem('placeholder').domElem.css('position', 'static');
        }

    },

    resetDistance : function(){
        var X = this._dragPos.x,
            Y = this._dragPos.y;
        this._startPos = { x : X, y : Y };
    },

    getDistance : function(){
        return {
            x : Math.abs(this._dragPos.x - this._startPos.x),
            y : Math.abs(this._dragPos.y - this._startPos.y)
        };
    },

    _onDragStart : function(e){
        this._initDrag(e);
        this.resetDistance(e.originalEvent.screenX, e.originalEvent.screenY);
        this._buildPlaceholder();
        this._emit('start', this._dragingElem);
    },

    getSiblings : function(block, placeholder){
        if(placeholder) {
            return {
                prev : this._elem('placeholder').prev().bem(block),
                next : this._elem('placeholder').next().bem(block)
            };
        }
        return this.__base.apply(this, arguments);
    },

    /**
     * @callback
     * @emits end
     */
    _onDragEnd : function(){
        this.__base.apply(this, arguments);
        this._nextTick(function(){ bemDom.destruct(this.findChildElem('placeholder')); });
    }

}));

});
