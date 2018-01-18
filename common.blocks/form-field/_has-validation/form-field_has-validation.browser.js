/* global modules:false */

modules.define('form-field', function(provide, FormField) {

provide(FormField.declMod({ modName : 'has-validation' }, {

    /**
     * Sets field Status and update validation
     * @public
     *
     * @param  string status  Error text
     * @returns {void}
     */
    setStatus : function(status) {
        this._status = status;
        this._updateStatus();
    }
}));

});

