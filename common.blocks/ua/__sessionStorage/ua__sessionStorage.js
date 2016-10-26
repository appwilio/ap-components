modules.define('ua', function(provide, ua){
    function checkSessionStorage() {
        try {
            var storage = window.sessionStorage,
                x = '__storage_test__';
            storage.setItem(x, x);
            storage.removeItem(x);
            return true;
        } catch(e) {
            return false;
        }
    }

    ua.sessionStorage = checkSessionStorage();
    provide(ua);
});

