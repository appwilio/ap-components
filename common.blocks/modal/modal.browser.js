/* global modules:false */

modules.define('modal',
    ['i-bem-dom', 'jquery'],
    function(provide, bemDom, $, Modal) {

provide(bemDom.declBlock(Modal, {
    onSetMod : {
        visible : function(name, val) {
            this.__base.apply(this, arguments);
            $('body').css('overflow', val === true? 'hidden': '');
        }
    }
}));

});

