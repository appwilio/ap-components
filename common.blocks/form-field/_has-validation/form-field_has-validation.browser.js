/* global modules:false */

modules.define('form-field', function(provide, FormField) {

FormField.decl({block: this.name, modName: 'has-validation', modVal: true}, {

    /**
     * Sets field Status and update validation
     * @public
     *
     * @param  string status  Error text
     * @returns {void}
     */
    setStatus: function(status) {
        this._status = status;
        this._updateStatus();
    }
});

provide(FormField);

});

