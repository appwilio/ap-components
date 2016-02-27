modules.define('comments-api', function(provide){
    provide({
        /**
         * Adds new comment
         * @override
         */
        add : function(){},

        getMessage : function(){
            return this._message;
        },

        _message : null,
    });
});
