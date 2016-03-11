/* global modules:false */

modules.define('image_lazy_scroll', ['i-bem__dom'], function(provide, BEMDOM) {

provide(BEMDOM.decl({ block : 'image', modName : 'lazy', modVal : 'scroll' }, {
  onSetMod : {
    'js' : {
      'inited' : function(){
        this.ss = this.findBlockOn('scrollspy');
      }
    }
  },

  _load : function() {
    this.ss.un('scrollin');
    this.ss.delMod('js');
    this.load();
  }

}, {
    live : function(){
        this.liveInitOnBlockInsideEvent('scrollin', 'scrollspy', this.prototype._load);
    }
}));

});

