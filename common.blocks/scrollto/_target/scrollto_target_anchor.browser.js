/* global modules:false */

modules.define('scrollto',
               ['i-bem__dom'],
               function(provide, BEMDOM, Scrollto) {

Scrollto.decl({ modName: 'target', modVal: 'anchor' }, {

    /**
     * Sets target
     * @param {jQuery|BEMDOM} anchor DOM elem or anchor BEMDOM block
     * @returns {popup} this
     */
    setAnchor : function(anchor) {

        this._target = anchor instanceof BEMDOM?
            anchor.domElem :
            anchor;

        return this;
    },

    /**
     * Calc scroll target position
     */
    _getScrollPos: function(){
        return this._target.offset().top - this.offset;
    },
});

provide(Scrollto);

});

