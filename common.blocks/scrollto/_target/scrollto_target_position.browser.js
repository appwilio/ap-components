/* global modules:false */

modules.define('scrollto',
               ['i-bem__dom'],
               function(provide, BEMDOM, Scrollto) {

Scrollto.decl({ block : 'scrollto', modName : 'target', modVal : 'position' }, {

    /**
     * Sets position
     * @param {Number} top y-coordinate
     */
    setPosition : function(top) {
        this._target = top;
    },

    /**
     * Calc scroll target position
     */
    _getScrollPos : function(){
        return this._target - this.offset;
    }
});

provide(Scrollto);

});

