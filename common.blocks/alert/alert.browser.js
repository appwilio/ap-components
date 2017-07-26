/* global modules:false */

modules.define('alert', ['i-bem__dom'], function(provide, BEMDOM) {
provide(BEMDOM.decl('alert', {
    dismiss : function(){
        this.setMod('hidden', true);
    }

}, {
    live : function(){
        this.liveBindTo('pointerover pointerout', function(){
            this.toggleMod('hovered');
        });
        return false;
    }
}));

});

