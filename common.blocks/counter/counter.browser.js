/* global modules:false */

modules.define('counter',
               ['i-bem__dom', 'button'],
               function(provide, BEMDOM) {

BEMDOM.decl('counter', {

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
        this.elem('val').text(this._val);
        this.emit('update');
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
        this.emit(this._action);
    }

}, { /** @lends counter */
    live : function () {
        this
            .liveInitOnBlockInsideEvent('click', 'button', function(){
                this._onButtonClick();
            });
    }
});

provide(BEMDOM);

});

