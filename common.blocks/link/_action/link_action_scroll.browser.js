/* global modules:false */

modules.define('link',
    ['jquery', 'scrollto'],
    function(provide, $, Scrollto, Link) {

provide(Link.declMod({ modName : 'action', modVal : 'scroll' }, {
    onSetMod : {
        'js' : {
            'inited' : function(){
                this._scrollto = this.findMixedBlock(Scrollto);
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
}));

});

