modules.define('form', ['i-bem__dom'], function(provide, Form) {

provide(Form.decl({ block : this.name, modName : 'has-validation', modVal : true }, {

    /**
     * Sets form-field error message & status
     * @param {Object} errors validation errors in format
     *  { title : ['Required field', 'Only characters'] }
     */
    setValidationErrors : function(errors){
        for(var error in errors) {
            if(!errors.hasOwnProperty(error)){continue;}

            var field = this.getFieldByName(error);
            if(field){
                field.setStatus(errors[error][0]);
                field.setMessageVal(errors[error][0]);
                field.getMessage().show();
            }
        }
    }
}));

});
