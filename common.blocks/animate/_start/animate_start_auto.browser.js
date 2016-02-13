/* global modules:false */

modules.define('animate', function(provide, Animate) {

Animate.decl({ block : 'animate', modName : 'start', modVal : 'auto' }, {
    onSetMod : {
        'js' : {
            'inited' : function(){
                this.__base.apply(this, arguments);
                this.start();
            }
        }
    }
});

provide(Animate);

});

