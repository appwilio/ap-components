modules.define('input', ['jslib__maskedinput'], function(provide, Lib, Input) {

provide(Input.declMod({ modName : 'type', modVal : 'masked' }, {
    onSetMod : {
        js : {
            inited : function() {
                this.__base.apply(this, arguments);
                this._elem('control').domElem.mask(this.params.mask, this.params.params);
            }
        }
    }
}));

});
