/* global modules:false */

modules.define('image', function(provide, BemImage) {

provide(BemImage.declMod({ modName : 'lazy', modVal : 'auto' }, {
    onSetMod : {
        js : {
            inited : function(){
                this.load();
            }
        }
    }
}));

});

