/* global modules:false */
modules.define('animate', ['i-bem__dom'], function (provide, BEMDOM) {
    provide(BEMDOM.decl('animate', {
        onSetMod : {
            'js' : {
                'inited' : function () {
                    this.bindTo(this.__self.stopEvents, this.stop);
                }
            }
        },

        start : function () {
            this.setMod('state', 'started');
        },
        stop : function () {
            this.setMod('state', 'stopped');
        },
        pause : function () {
            this.setMod('state', 'paused');
        }
    }, {
        stopEvents : 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend'
    }));

var msg = [
    'Block `animate` is DEPRECATED!',
    'Please use `animation` from https://github.com/bem-contrib/bem-animations'
].join('\n');

/* global console:false */
console.warn(msg);

});
