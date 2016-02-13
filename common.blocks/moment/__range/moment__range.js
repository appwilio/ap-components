modules.define('moment__range',
               ['moment', 'loader_type_js'],
               function(provide, moment, loader) {

function doProvide() {
    /**
     * @exports
     * @type Function
     */
    provide(moment);
}

typeof moment.range !== 'undefined'?
    doProvide() :
    loader('https://cdnjs.cloudflare.com/ajax/libs/moment-range/2.0.3/moment-range.min.js', doProvide);
});
