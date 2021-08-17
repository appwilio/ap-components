/* global modules:false */

modules.define('scrollto',
   function(provide, Scrollto) {

provide(Scrollto.declMod({ modName : 'target', modVal : 'position' }, {

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
}));

});

