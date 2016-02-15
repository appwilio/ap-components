modules.define('confirm', ['i-bem__dom', 'modal'], function(provide, BEMDOM) {

provide(BEMDOM.decl({ block : this.name, modName : 'type', modVal : 'modal' }, {
    onSetMod : {
        js : {
            inited : function() {
                this.__base.apply(this, arguments);
                this.show();
                this.on('yes', this.hide);
                this.on('no', this.hide);
            }
        }
    },

    _getModal : function(){
        return this._modal || (this._modal = this.findBlockOn('modal'));
    },

    show : function(){
        this._getModal().setMod('visible');
    },

    hide : function(){
        this._getModal().delMod('visible');
    }

}));

});
