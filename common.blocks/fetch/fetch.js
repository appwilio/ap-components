modules.define('fetch', ['fetch__config', 'loader_type_js', 'vow', 'ua'], function(provide, cfg, Loader, Vow, ua){
    var fetchSupported = window.fetch  !== undefined;

    if(!ua.promise){
        window.Promise = Vow.Promise;
    }

    if(fetchSupported){
        provide(window.fetch);
        return;
    }

    Loader(cfg.url, function(){
        provide(window.fetch);
    });
});
