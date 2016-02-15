modules.define('object-format', ['i-bem'], function(provide, BEM){
    BEM.decl(this.name, {

        /**
         * convert object to formated string
         * @override
         * @param {Object} obj source object
         * @returns {String} serialized object
         */
        toString : function(obj){
            return obj.toString();
        }
    });
    provide(BEM);
});
