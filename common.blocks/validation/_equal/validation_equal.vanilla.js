/* global modules:false */

modules.define('validation_equal',
               function(provide) {

var DEFAULT_MESSAGE = 'Fields is not equals';

provide(function(params){
    params = params || {};
    var message = params.message || DEFAULT_MESSAGE; 

    return function(vals){
      return !vals || vals[0] === vals[1] ? null : message;
    }
});

});

