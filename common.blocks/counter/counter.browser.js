/* global modules:false */

modules.define('counter',
               ['i-bem-dom', 'button'],
               function(provide, bemDom, Button) {

provide(bemDom.declBlock(this.name, {

    onSetMod : {
        'js' : {
            'inited' : function() {
                this._val = this.params.val || 0;
                this._action = this.params.action || 'click';
            }
        }
    },

    /**
     * update counter value
     * @public
     * @param {Integer} val new value
     */
    update : function(val) {
        if(isNaN(parseInt(val, 10))) {
            return;
        }

        this._val = parseInt(val, 10);
        this._elem('val').domElem.text(this._val);
        this._emit('update');
    },

    /**
     * Get counter value
     * @public
     * @returns {Integer} value
     */
    getVal : function() {
        return this._val;
    },

    /**
     * onclick callback
     */
    _onButtonClick : function() {
        this._emit(this._action);
    }

}, { /** @lends counter */
    onInit : function () {
        this._events(Button).on('click', function() {
            this._onButtonClick();
        });
    }
}));

});

