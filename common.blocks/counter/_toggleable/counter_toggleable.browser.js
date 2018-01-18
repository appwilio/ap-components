/* global modules:false */

modules.define('counter',
    ['button'],
    function(provide, Button, Counter) {

provide(Counter.declMod({ modName : 'toggleable' }, {

    onSetMod : {
        'toggled' : function(modName, modVal) {
            this
                .findChildBlock(Button)
                .setMod('hovered', modVal);
        }
    },

    /**
     * Update counter value
     * @public
     * @param {Integer} val new value
     * @param {Boolean} state toggled
     */
    update : function(val, state) {
        this.setMod('toggled', !!state);
        this.__base.apply(this, arguments);
    }
}));

});

