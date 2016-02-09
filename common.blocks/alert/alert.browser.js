/* global modules:false */

modules.define('alert',['i-bem__dom'], function(provide, BEMDOM) {
BEMDOM.decl('alert', {
    onSetMod: {
        'js': {
            'inited': function(){}
        },
    },

    dismiss: function(){
        this.setMod('hidden', true);
    }

}, {
    live: function(){
        this.liveBindTo('mouseover mouseout', function(){
            this.toggleMod('hovered');
        });
        return false;
    }
});
provide(BEMDOM);

});

