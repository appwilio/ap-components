/**
 * @module tabs
 */

modules.define('tabs', ['i-bem__dom', 'jquery'], function(provide, BEMDOM, $) {

/**
 * @exports
 * @class tabs
 * @bem
 */
provide(BEMDOM.decl(this.name,  /** @lends tabs.prototype */{
    onSetMod : {
        'js' : {
            'inited' : function() {
                this._boxList = this.findElem('box', true);
                this._radioGroup = this.findBlockOn(this.findElem('tabs-group', true), 'radio-group');
            }
        }
    },

    _onRadioGroupChange : function(e) {
        e.stopPropagation();
        var newVal = this._radioGroup.getVal();
        this.delMod(this._boxList, 'selected');
        this.setMod($(this._boxList[newVal]), 'selected');
        this.emit('change', newVal);
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
    live : function() {
        this.liveInitOnBlockInsideEvent('change', 'radio-group', this.prototype._onRadioGroupChange);
    }
}));

});
