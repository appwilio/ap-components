/* global modules:false */

modules.define('form-field',
               ['validation_equal'], function(provide, validate_equal, FormField) {

FormField.decl({ modName : 'validate', modVal : 'equal' },
   {
     onSetMod : {
       'js' : {
         'inited' : function(){
           this._form = this.findBlockOutside('form');
           this.__base.apply(this, arguments);
           this.getValidator().push(validate_equal(this.params.equal));
         }
       }
     },
     getStatus : function(){
        var nameToCompare = this.params.equal.rel;
        var val2 = this
                    ._form
                    .getFieldByName(nameToCompare)
                    .getVal();

        return this.getValidator().check([this.getVal(), val2]);
     }
   }
  );

provide(FormField);

});

