/* global modules:false */

// TODO: Рекурсивная зависмость form-field -> form, form -> form-field
//
// modules.define('form-field',
//    ['validation_equal', 'form'],
//     function(provide, validate_equal, Form, FormField) {
//
// provide(FormField.declMod({ modName : 'validate', modVal : 'equal' },
//    {
//      onSetMod : {
//        'js' : {
//          'inited' : function(){
//            this._form = this.findParrentBlock(Form);
//            this.__base.apply(this, arguments);
//            this.getValidator().push(validate_equal(this.params.equal));
//          }
//        }
//      },
//      getStatus : function(){
//         var nameToCompare = this.params.equal.rel,
//             val2 = this
//                     ._form
//                     .getFieldByName(nameToCompare)
//                     .getVal();
//
//         return this.getValidator().check([this.getVal(), val2]);
//      }
//    }
// ));
//
//
// });
//
