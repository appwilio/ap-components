/* global modules:false */

modules.define('image_load_lazy', ['jquery', 'i-bem__dom'], function(provide, $, BEMDOM) {

    provide(BEMDOM.decl({ block : 'image', modName : 'load', modVal : 'lazy' }, {
        onSetMod : {
            //'state' : {
                //'loading' : function(){
                    //this
                    //.findBlockInside('spin')
                    //.setMod('visible');
                //},
                //'loaded' : function(){
                    //this
                    //.findBlockInside('spin')
                    //.delMod('visible');
                //}
            //}
        },
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

            /*
            FIXME: trigger recalculating offset to other images.
            Blocks positions changes after inseting image without height attribute.
            So, we need to recalculate blocks postions.
            https://github.com/bem-incubator/bem-scrollspy/blob/master/common.blocks/scrollspy/scrollspy.browser.js#L21
            */
            //BEMDOM.win.resize();
        }

    }));

    //provide(BEMDOM);

});

