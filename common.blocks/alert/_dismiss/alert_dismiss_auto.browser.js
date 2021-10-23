/* global modules:false */

modules.define('alert',
   ['functions__timeout'], function(provide, timeout, Alert) {

provide(Alert.declMod({ modName : 'dismiss', modVal : 'auto' }, {
    beforeSetMod : {
        'hidden' : {
            'true' : function(){
                if(this.hasMod('hovered')){
                    this._events().once({ modName : 'hovered', modVal : '' }, this.dismiss);
                    return false;
                }
                return true;
            }
        }
    },
    onSetMod : {
        'js' : {
            'inited' : function(){
                this.__base.apply(this, arguments);
                this.timeout = this.params.timeout || 5000;
                timeout(this.timeout).then(this.dismiss, this);
            }
        }
    }
}));

});

