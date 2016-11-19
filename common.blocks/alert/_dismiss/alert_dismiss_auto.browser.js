/* global modules:false */

modules.define('alert',
               ['functions__timeout', 'i-bem__dom'], function(provide, timeout, BEMDOM) {

BEMDOM.decl({ block : 'alert', modName : 'dismiss', modVal : 'auto' }, {
    beforeSetMod : {
        'hidden' : {
            'true' : function(){
                if(this.hasMod('hovered')){
                    var event = { modName : 'hovered', modVal :false };
                    this.on(event, function(){
                        this.un(event);
                        this.dismiss();
                    }, this);
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
});

provide(BEMDOM);

});

