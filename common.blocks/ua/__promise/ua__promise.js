modules.define('ua', function(provide, ua){
    function checkPromise() {
         return 'Promise' in window &&
        // Some of these methods are missing from
        // Firefox/Chrome experimental implementations
        'resolve' in window.Promise &&
        'reject' in window.Promise &&
        'all' in window.Promise &&
        'race' in window.Promise &&
        // Older version of the spec had a resolver object
        // as the arg rather than a function
        (function() {
          var resolve;
          new window.Promise(function(r) { resolve = r; });
          return typeof resolve === 'function';
        }());
    }

    ua.promise = checkPromise();
    provide(ua);
});
