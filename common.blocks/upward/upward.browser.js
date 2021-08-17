/* global modules:false */

modules.define('upward',
    ['jquery', 'functions__throttle', 'i-bem-dom', 'scrollto'],
    function(provide, $, throttle, bemDom, Scrollto) {

provide(bemDom.declBlock(this.name, {
    onSetMod : {
        'js' : {
            inited : function(){
                this._scrollto = this.findMixedBlock(Scrollto);
                this._scrollto.setPosition(0);
                this._domEvents(bemDom.win)
                    .on('scroll', throttle(this._onScroll, 300, this))
                    .on('resize', throttle(this._onResize, 300, this));
                this._onResize();
                this._onScroll();
            }
        }
    },

    _onClick : function() {
        this._scrollto.scroll();
    },

    _onResize : function(){
        this.__self.pageHeight = bemDom.win.height();
    },

    _onScroll : function(){
        var currentScroll = bemDom.win.scrollTop();
        this.setMod('visible', currentScroll > this.__self.pageHeight);
    }
}, {
    lazyInit : false,
    onInit : function(){
        this._domEvents()
            .on('mouseover mouseout', function(){ this.toggleMod('hovered'); })
            .on('click', function(){ this._onClick(); });
    }
}));

});

