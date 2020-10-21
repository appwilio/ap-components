/* global modules:false */

modules.define('scrollto',
   ['i-bem-dom', 'jquery'],
   function(provide, bemDom, $) {

provide(bemDom.declBlock(this.name, {
    onSetMod : {
        'js' : {
            inited : function(){
                this.offset = this.params.offset || 0;
                this.speed = this.params.speed || 300;
                this.easing = this.params.easing || 'swing';
            }
        }
    },

    /**
     * scroll page to target
     */
    scroll : function(){
        if(!this._target && isNaN(this._target))
            throw Error('Can\'t scroll without target');

        this._animate(this._getScrollPos());
    },

    _animate : function(pos){
        $('html, body').animate({ scrollTop : pos }, this.speed, this.easing);
    }
}));

});

