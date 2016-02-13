/* global modules:false */

modules.define('avatar', ['i-bem__dom'], function(provide, BEMDOM) {

provide(BEMDOM.decl('avatar', {}, {
  live : function(){
    this.liveBindTo('link', 'click', function(){
      return false;
    });
  }
}));

});

