/* global modules:false */

modules.define('counter',
               ['i-bem__dom'], function(provide, BEMDOM) {

BEMDOM.decl({block: 'counter', modName: 'toggleable', modVal: true },{

    onSetMod: {
        'toggled' : function(modName, modVal) {
            this
                .findBlockInside('button')
                .setMod('hovered', modVal);
        }
    },

    /**
     * Update counter value
     * @public
     * @param {Integer} val new value
     * @param {Boolean} state toggled
     */
    update: function(val, state) {
        this.setMod('toggled', !!state);
        this.__base.apply(this, arguments);
    }
});

provide(BEMDOM);

});

