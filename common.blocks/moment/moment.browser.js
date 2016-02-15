modules.define('moment', ['loader_type_js', 'moment__config'], function(provide, loader, cfg) {

function doProvide() {
   /* globals moment: true */

    moment.locale(cfg.locale);
    provide(moment);
}

typeof moment !== 'undefined'?
    doProvide() :
    loader(cfg.url, function(){
        loader(cfg.localeUrl, doProvide);
    });

});
