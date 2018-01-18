modules.define('sortable', ['i-bem__dom', 'jquery'], function(provide, BEMDOM, $) {

provide(BEMDOM.decl({ block : 'sortable', modName : 'pattern', modVal : 'menu' }, {
    onSetMod : {
        js : {
            inited : function(){
                this.__base.apply(this, arguments);
                this.on('sort', this.resetDistance);
            }
        }
    },

    getPlaceholder : function(){
        return this.elem('placeholder');
    },

    _buildPlaceholder : function(){
        BEMDOM.before(this._dragingElem, '<div class="sortable__placeholder"></div>');
        var w = this._dragingElem.width(),
            h = this._dragingElem.height();

        this.elem('placeholder').css({ width : w, height : h });
        this._movePlaceholder(this._dragingElem.offset());
    },

    _movePlaceholder : function(offset){
        this.elem('placeholder').css(offset);
    },

    _sortInsert : function(source){
        BEMDOM.replace(this.elem('placeholder'), source);
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

        this.emit('over', this._lastMoveDir);

        this._moveElem(this.elem('placeholder'), this._getRealTarget(e));
        var isPlaceholder = this.elem('placeholder').is($(e.target));
        if(!isPlaceholder) {
            this.elem('placeholder').css('position', 'static');
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
        this.emit('start', this._dragingElem);
    },

    getSiblings : function(block, placeholder){
        if(placeholder) {
            return {
                prev : this.findBlockOn(this.elem('placeholder').prev(), block),
                next : this.findBlockOn(this.elem('placeholder').next(), block)
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
        this._nextTick(function(){BEMDOM.destruct(this.findElem('placeholder'));});
    }

}));

});
