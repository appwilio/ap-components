/* global modules:false */

modules.define('scrollto',
   function(provide, Scrollto) {

provide(Scrollto.declMod({ modName : 'target', modVal : 'anchor' }, {

    /**
     * Sets target
     * @param {jQuery|bemDom} anchor DOM elem or anchor BEMDOM block
     * @returns {popup} this
     * @public
     */
    setAnchor : function(anchor) {

        this._target = anchor.domElem || anchor;

        return this;
    },

    /**
     * Calc scroll target position
     * @private
     */
    _getScrollPos : function(){
        return this._target.offset().top - this.offset;
    }
}));

});

