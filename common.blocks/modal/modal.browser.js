/* global modules:false */

modules.define('modal', function(provide, Modal) {

    Modal.decl('modal', {},{
        live: function(){
            this.__base.apply(this, arguments);
            this.liveBindTo('close', 'click', function(){
                this.delMod('visible');
            })
        }
    });

provide(Modal);

});

