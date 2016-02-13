/**
 * @module dfp
 * @description Provide Google Double Click For Publishers (load if it does not exist).
 */

modules.define(
    'dfp',
    ['loader_type_js', 'dfp__config'],
    function(provide, loader, cfg) {

/* global googletag */
function doProvide() {
    /**
     * @exports
     * @type Function
     */
    googletag.cmd.push(function(){
        cfg.single && googletag.pubads().enableSingleRequest();
        provide(googletag);
        googletag.enableServices();
    });

}

typeof googletag !== 'undefined'?
    doProvide() :
    loader('//www.googletagservices.com/tag/js/gpt.js', doProvide);
});
