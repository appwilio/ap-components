modules.define('functions__timeout', ['vow'], function(provide, Vow){
    function timeout(time) {
        var deferred = Vow.defer();
        setTimeout(function(){
            deferred.resolve();
        }, time);
        return deferred.promise();
    }

    provide(timeout);
});

