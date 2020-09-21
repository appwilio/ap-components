/* global modules:false */

modules.define('image', ['jquery', 'i-bem-dom'], function(provide, $, bemDom, BemImage) {

    provide(BemImage.declMod({ modName : 'load', modVal : 'lazy' }, {

        /**
        * load Image
        * @public
        */
        load : function(){
            this.setMod('state', 'loading');

            this.img = new Image();
            this.img.onload = this._onLoad.bind(this);
            this.img.onerror = this._onError.bind(this);
            this.img.src = this.params.url;
        },

        _onError : function() {
            this.setMod('state', 'failed');
            this.detach();
        },

        /**
        * Calls after image source loaded
        * @protected
        */
        _onLoad : function(){
            this._elem('img').domElem.attr('src', this.params.url);
            this.setMod('state', 'loaded');
            this.detach();
        },

        detach : function() {
            this.img = undefined;
            bemDom.detach(this.domElem);
        }
    }));
});

