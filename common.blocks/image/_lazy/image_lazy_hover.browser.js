/* global modules:false */

modules.define('image', function(provide, BemImage) {

provide(BemImage.declMod({ modName : 'lazy', modVal : 'hover' }, {}, {
    onInit : function() {
        this._domEvents().on('pointerover', this.prototype.load);
    }
}));

});

