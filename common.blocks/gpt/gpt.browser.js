modules.define('gpt',
               ['i-bem__dom', 'dfp__config', 'jquery'],
               function(provide, BEMDOM, cfg, $) {

provide(BEMDOM.decl(this.name, {
    onSetMod: {
        js: {
            inited: function() {
                this._id = this.params.id;
                modules.require('dfp', $.proxy(this._onDfpReady, this));
            }
        }
    },

    _onDfpReady : function(googletag){
        this.registerSlot() && googletag.display(this._id);
    },

    registerSlot: function(){
        var location = cfg.locations[this.params.slot];
        if(!location){
            return false;
        }
        googletag
            .defineSlot('/' + cfg.network +'/' + location.name, location.sizes, this._id)
            .addService(googletag.pubads());
        return true;
    },

}));

})
