modules.define('link',
    ['jquery', 'fancybox'],
    function(provide, $, fancy, Link) {

provide(Link.declMod({ modName : 'action', modVal : 'lightbox' }, {
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
