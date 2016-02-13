/* global modules:false */

modules.define('link',
               ['i-bem__dom', 'jquery'], function(provide, BEMDOM, $, Link) {
Link.decl({ modName : 'action', modVal : 'scroll' }, {
    onSetMod : {
        'js' : {
            'inited' : function(){
                this._scrollto = this.findBlockOn('scrollto');
            }
        }
    },

    _onPointerClick : function(){
        if(this.hasMod('disabled')) {
            return false;
        }

        this.__base.apply(this, arguments);
        var to = $(this.domElem.attr('href'));
        this._scrollto.setAnchor(to);
        this._scrollto.scroll();
    }
});
provide(Link);

});

