modules.define('gpt',
   ['i-bem-dom', 'dfp__config', 'jquery'],
   function(provide, bemDom, cfg, $) {

provide(bemDom.decl(this.name, {
    onSetMod : {
        js : {
            inited : function() {
                modules.require('dfp', $.proxy(this._onDfpReady, this));
            }
        }
    },

    _onDfpReady : function(googletag){
        this.registerSlot(googletag) && googletag.display(this.params.id);
    },

    registerSlot : function(googletag){
        var location = cfg.locations[this.params.slot];
        if(!location){
            return false;
        }
        googletag
            .defineSlot('/' + cfg.network + '/' + location.name, location.sizes, this.params.id)
            .addService(googletag.pubads());
        return true;
    }

}));

});
