/**
 * @module form-field
 */
modules.define('form-field',
    ['validation_email'],
    function(provide, validate_email, FormField) {

/**
 * Email form-field validation

 * @exports
 * @class form-field
 * @bem
 */
FormField.decl({ modName : 'validate', modVal : 'email' }, /** @lends form-field.prototype */{

    onSetMod : {
        'js' : {
            'inited' : function() {
                this.__base.apply(this, arguments);
                this._i = this.params;
                this._i.message = 'Проверьте правильность введенной почты';
                this.getValidator().push(validate_email(this._i));
                //this.getValidator().push(validate_email(this.params.email));

            }
        }
    }

});

provide(FormField);

});
