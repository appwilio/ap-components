/**
 * @module form-field
 */
modules.define('form-field',
    ['validation_pattern'],
    function(provide, validation_pattern, FormField) {

/**
 * Email form-field validation

 * @exports
 * @class form-field
 * @bem
 */
FormField.decl({ modName : 'validate', modVal : 'password' }, /** @lends form-field.prototype */{

    onSetMod : {
        'js' : {
            'inited' : function() {
                this.__base.apply(this, arguments);
                this._i = this.params;
                this._i.message = 'Проверьте правильность пароля';
                this.getValidator().push(validation_pattern(this._i));

            }
        }
    }

});

provide(FormField);

});
