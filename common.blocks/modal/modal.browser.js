/* global modules:false */

modules.define('modal', ['jquery'], function(provide, $, Modal) {

provide(Modal.decl({
    onSetMod : {
        visible : function(name, val) {
            this.__base.apply(this, arguments);
            $('body').css('overflow', val === true? 'hidden': '');
        }
    }
}));

});

