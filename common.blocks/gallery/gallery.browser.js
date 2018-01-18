modules.define('gallery',
    ['fancybox'],
    function(provide, fancy, bemDom) {

provide(bemDom.declBlock(this.name, {
    onSetMod : {
        'js' : {
            'inited' : function() {
                this.config = this.params.config;
                this.rel = this.domElem.attr('rel');
                this.domElem.attr('rel', this.rel).fancybox(this.params.config);
            }
        }

    }

}));

});
