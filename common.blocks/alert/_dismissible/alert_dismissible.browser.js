/* global modules:false */

modules.define('alert',
    function(provide, Alert) {

provide(Alert.declMod({ modName : 'dismissible' }, {
    onSetMod : {
        'js' : {
            'inited' : function(){
                this.__base.apply(this, arguments);
            }
        }
    },

}, {
    onInit : function(){
        this.__base.apply(this, arguments);
        this._domEvents('dismiss').on('click', function(){
            this.delMod('hovered');
            this.dismiss();
        });
    }
}));

});

