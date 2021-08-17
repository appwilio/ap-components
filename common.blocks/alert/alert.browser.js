/* global modules:false */

modules.define('alert', ['i-bem-dom'], function(provide, bemDom) {
provide(bemDom.declBlock(this.name, {
    dismiss : function(){
        this.setMod('hidden', true);
    }

}, {
    lazyInit : false,
    onInit : function(){
        this._domEvents().on('pointerover pointerout', function(){
            this.toggleMod('hovered');
        });
    }
}));

});

