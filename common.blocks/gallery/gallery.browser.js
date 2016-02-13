modules.define('i-bem__dom', ['jquery', 'fancybox'], function(provide, $, fancy, DOM) {

provide(DOM.decl('gallery', {
    onSetMod : {
        'js' : {
            'inited' : function() {
                this.config = this.params.config;
                this.rel = this.domElem.attr('rel');
                $('.gallery').attr('rel', this.rel).fancybox(this.params.config);
            }
        }

    }

}));

});
