/* global modules:false */

modules.define('image', function(provide, BemImage) {

provide(bemImage.declMod({ modName : 'lazy', modVal : 'hover' }, {}, {
    onInit : function() {
        this._domEvents().on('pointerover', this.prototype.load);
    }
}));

});

