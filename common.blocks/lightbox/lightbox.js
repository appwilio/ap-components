modules.define('lightbox',
    ['jquery', 'fancybox', 'i-bem-dom'],
    function(provide, $, fancy, bemDom) {

provide(bemDom.declBlock(this.name, {
    onSetMod : {
        'js' : {
            'inited' : function() {
                this.config = this.params.config;
                this.group = this.domElem.attr('rel');
                this.url = this.params.url || this.domElem.attr('href');
            }
        }
    },
    _open : function(){
        if(this.group) {
            $.fancybox.open($('[rel=' + this.group + ']'), this.config);
        } else {
            $.fancybox.open(this.url, this.config);
        }
        this._emit('opened');
        return false;
    },
    _close : function(){
        $.fancybox.close();
        this._emit('closed');
    }

}, {
    onInit : function(){
        this._domEvents().on('click', function(){
            this._open();
            return false;
        });
    }
}));

});
