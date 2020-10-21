/* global modules:false */
modules.define('typehead', ['vow', 'i-bem'], function(provide, Vow, bem){

provide(bem.declBlock(this.name, {

    /**
     * Variants source
     * @protected
     */
    _source : null,

    /**
     * Set data source
     * @public
     * @override
     * @param src Any data-source
     */
    setSource : function(src){
        this._source = src;
    },

    /**
     * Search completion variants
     * @public
     * @param  {String} val value to autocomplete
     * @returns {Object} Promise
     */
    search : function(val){
        var defer = Vow.defer(),
            promise = defer.promise();

        this._getVariants(val).then(
            function(variants){
                defer.resolve(variants);
                this._emit('found', variants);
            },
            function(){
                defer.reject();
                this._emit('nofound');
            },
            this
        );
        return promise;
    },

    /**
     * Get autocompletion array
     * @override
     * @returns {Object} Promise
     */
    _getVariants : function(){
        throw Error('_getVariants is not implemented.');
    }
}));

});
