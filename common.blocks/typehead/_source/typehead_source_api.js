/* global modules:false */
modules.define('typehead',
               ['vow', 'api'],
               function(provide, Vow, Api, Typehead){

Typehead.decl({ block : 'typehead', modName : 'source', modVal :'api' }, {

    // jshint unused: false
    search : function(val){
        return this.__base.apply(this, arguments);
    },

    /**
     * Get autocompletion array
     * @returns {Object} Promise
     */
    _getVariants : function(val){
        if(this._source === null){
            throw Error('source is empty. Use setSource(str)');
        }

        var defer = Vow.defer(),
            promise = defer.promise();
        Api
            .read(this._source + val)
            .then(
                function(res){
                    if(res.payload.items) {
                        defer.resolve(res.payload.items);
                    } else {
                        defer.reject();
                    }
                },
                function(err){
                    defer.reject(err);
                },
                this
            );
        return promise;
    }
}, {
});

provide(Typehead);
});
