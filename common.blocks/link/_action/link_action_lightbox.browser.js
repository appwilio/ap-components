modules.define('i-bem__dom',
    ['jquery', 'fancybox'],
    function(provide, $, fancy, DOM) {

provide(DOM.decl({ block : 'link', modName : 'action', modVal : 'lightbox' }, {
    onSetMod : {
        'js' : {
            'inited' : function() {
                this.config = this.params.config;
                this.fancybox(this.params.config);
            }
        }
    }
}));
});
