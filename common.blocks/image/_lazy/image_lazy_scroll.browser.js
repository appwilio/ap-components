/* global modules:false */

modules.define('image', ['scrollspy'], function(provide, Scrollspy, BemImage) {

provide(BemImage.declMod({ modName : 'lazy', modVal : 'scroll' }, {

    _load : function() {
        this.findMixedBlock(Scrollspy).delMod('js');
        this.load();
    }

}, {
    onInit : function(){
        this._events(Scrollspy).on('scrollin', this.prototype._load);
    }
}));

});

