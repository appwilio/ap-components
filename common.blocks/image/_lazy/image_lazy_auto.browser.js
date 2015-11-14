/* global modules:false */

modules.define('image_lazy_auto',['i-bem__dom'], function(provide, BEMDOM) {

provide(BEMDOM.decl({block: 'image', modName: 'lazy', modVal: 'auto'},{
  onSetMod: {
    'js': {
      'inited': function(){
        this.load();
      }
    }
  }
}));

});

