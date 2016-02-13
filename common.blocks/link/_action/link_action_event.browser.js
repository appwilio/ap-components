/* global modules:false */

modules.define('link',
               ['events__channels'],
               function(provide, Channel, Link) {
Link.decl({ block : 'link', modName : 'action', modVal : 'event' }, {
    onSetMod : {
        'js' : {
            'inited' : function(){
                this.__base.apply(this, arguments);
                this._event = this.params.event;
            }
        }
    },
    _onPointerClick : function(){
        this.__base.apply(this, arguments);

        if(this.hasMod('disabled') || !this._event) {
            return;
        }

        if(this._event.channel) {
            Channel(this._event.channel).emit(this._event.e);
        } else {
            this.emit(this._event);
        }
    }
});
provide(Link);

});

