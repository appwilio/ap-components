/* global modules:false */

modules.define('image_lazy_hover', ['i-bem__dom'], function(provide, BEMDOM) {

provide(BEMDOM.decl({ block : 'image', modName : 'lazy', modVal : 'hover' }, {}, {
  live : function() {
    this.liveBindTo('pointerover', this.prototype.load);
  }
}));

});

