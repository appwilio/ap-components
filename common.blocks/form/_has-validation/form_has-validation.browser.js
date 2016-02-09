modules.define('form', ['i-bem__dom'], function(provide, Form) {

provide(Form.decl({ block : this.name, modName : 'has-validation', modVal : true }, {

    /**
     * Sets form-field error message & status
     * @param {Object} errors validation errors in format
     *  { title : ['Required field', 'Only characters'] }
     */
    setValidationErrors: function(errors){
        for (error in errors) {
            var field = this.getFieldByName(error);
            field.setStatus(errors[error][0]);
        }
    },
}));

})
