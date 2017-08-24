/* global modules:false */

modules.define('image_lazy_scroll', ['i-bem__dom'], function(provide, BEMDOM) {

provide(BEMDOM.decl({ block : 'image', modName : 'lazy', modVal : 'scroll' }, {

    _load : function() {
        this.findBlockOn('scrollspy').delMod('js');
        this.load();
    }

}, {
    live : function(){
        this.liveInitOnBlockInsideEvent('scrollin', 'scrollspy', this.prototype._load);
    }
}));

});

