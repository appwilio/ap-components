/* global modules:false */

modules.define('modal',
    ['jquery'],
    function(provide, $, Modal) {

provide(Modal.declMod({ modName : 'has-close' }, {}, {
    onInit : function(){
        this.__base.apply(this, arguments);

        this._domEvents('close').on('pointerclick', function() {
            this.delMod('visible');
        });
    }
}));

});

