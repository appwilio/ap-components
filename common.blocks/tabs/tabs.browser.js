/**
 * @module tabs
 */

modules.define('tabs',
    ['i-bem-dom', 'jquery', 'radio-group'],
    function(provide, bemDom, $, RadioGroup) {

/**
 * @exports
 * @class tabs
 * @bem
 */
provide(bemDom.declBlock(this.name,  /** @lends tabs.prototype */{
    onSetMod : {
        'js' : {
            'inited' : function() {
                this._radioGroup = this._elem('tabs-group').findMixedBlock(RadioGroup);
            }
        },
        'disabled' : function(name, val){
            this._radioGroup.setMod(name, val);
        }
    },

    _onRadioGroupChange : function(e) {
        e.stopPropagation();
        var newVal = this._radioGroup.getVal();
        this._elems('box').delMod('selected');
        this._elems('box').get(newVal).setMod('selected');
        this._emit('change', newVal);
    },

    /**
     * Sets active tab by index number
     * @param {Number} index
     * @returns {tabs} this
     */
    changeTab : function(index) {
        this._radioGroup.setVal(index);
        return this;
    },

    /**
     * Gets current tab index
     * @returns {Number}
     */
    getVal : function() {
        return parseInt(this._radioGroup.getVal());
    }
},  /** @lends tabs */{
    onInit : function() {
        this._events(RadioGroup).on('change', this.prototype._onRadioGroupChange);
    }
}));

});
