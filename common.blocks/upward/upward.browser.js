/* global modules:false */

modules.define('upward',
               ['jquery', 'functions__throttle', 'i-bem__dom'],
               function(provide, $, throttle, BEMDOM) {

BEMDOM.decl('upward', {
    onSetMod : {
        'js' : {
            inited : function(){
                this._scrollto = this.findBlockOn(this.domElem, 'scrollto');
                this._scrollto.setPosition(0);
                this.bindToWin('scroll', throttle(this._onScroll, 300, this));
                this.bindToWin('resize', throttle(this._onResize, 300, this));
                this._onResize();
                this._onScroll();
            }
        }
    },

    _onClick : function(){
        this._scrollto.scroll();
    },

    _onResize : function(){
        this.__self.pageHeight = BEMDOM.win.height();
    },

    _onScroll : function(){
        var currentScroll = BEMDOM.win.scrollTop();
        this.setMod('visible', currentScroll > this.__self.pageHeight);
    }
}, {
    live : function(){
        this.liveBindTo('mouseover mouseout', function(){
            this.toggleMod('hovered');
        });

        this.liveBindTo('click', function(){
            this._onClick();
        });
        return false;
    }
});

provide(BEMDOM);

});

