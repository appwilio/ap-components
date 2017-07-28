/* global modules:false */

modules.define('modal',
    ['jquery'],
    function(provide, $, Modal) {

provide(Modal.decl({ modName : 'has-close', modVal : true }, {}, {
    live : function(){
        this.__base.apply(this, arguments);

        this.liveBindTo('close', 'pointerclick', function() {
            this.delMod('visible');
        });
    }
}));

});

