/* global modules:false */

modules.define('image_load_lazy', ['jquery', 'i-bem__dom'], function(provide, $, BEMDOM) {

    provide(BEMDOM.decl({ block : 'image', modName : 'load', modVal : 'lazy' }, {

        /**
        * load Image
        * @public
        */
        load : function(){
            this.setMod('state', 'loading');
            this.bindTo('imgload', this._onLoaded);

            this.img = new Image();
            var ctx = this.domElem;
            this.img.onload = function(){ctx.trigger('imgload'); };
            this.img.src = this.params.url;
        },

        /**
        * Calls after image source loaded
        * @protected
        */
        _onLoaded : function(){
            this.elem('img').attr('src', this.params.url);
            this.setMod('state', 'loaded');
            this.img = undefined;
            BEMDOM.detach(this.domElem);
        }

    }));
});

