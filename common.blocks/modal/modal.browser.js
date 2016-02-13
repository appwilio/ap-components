/* global modules:false */

modules.define('modal', ['jquery'], function(provide, $, Modal) {

    Modal.decl('modal', {
        onSetMod : {
            'visible' : function(name, val){
                this.__base.apply(this, arguments);
                $('body').css('overflow', val === true? 'hidden': '');
            }
        }
    }, {
        live : function(){
            this.__base.apply(this, arguments);
            this.liveBindTo('close', 'click', function(){
                this.delMod('visible');
            });
        }
    });

provide(Modal);

});

