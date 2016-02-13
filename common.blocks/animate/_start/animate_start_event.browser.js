/* global modules:false */

modules.define('animate', function(provide, Animate) {
Animate.decl({ block : 'animate', modName : 'start', modVal : 'event' }, {
    onSetMod : {
        'js' : {
            'inited' : function(){
                this.__base.apply(this, arguments);
                if(!this.params.event)
                    return;

                var event = this.params.event.name,
                    block = this.params.event.block;
                if(block) {
                    this
                        .findBlockOn(block)
                        .on(event, this.start, this);
                } else {
                    this.bindTo(this.domElem, event, this.start);
                }
            }
        }
    }
});
provide(Animate);

});

