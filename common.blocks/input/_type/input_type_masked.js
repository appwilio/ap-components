modules.define('input', ['i-bem__dom', 'jslib__maskedinput'], function(provide, BEMDOM) {

provide(BEMDOM.decl({ block : this.name, modName : 'type', modVal : 'masked' }, {
    onSetMod : {
        js : {
            inited : function() {
                this.__base.apply(this, arguments);
                this.findElem('control').mask(this.params.mask, this.params.params);
            }
        }
    }
}));

});
