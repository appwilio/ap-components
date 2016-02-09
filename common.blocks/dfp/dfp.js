/**
 * @module dfp
 * @description Provide Google Double Click For Publishers (load if it does not exist).
 */

modules.define(
    'dfp',
    ['loader_type_js', 'dfp__config'],
    function(provide, loader, cfg) {

/* global jQuery */

function doProvide(preserveGlobal) {
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
    doProvide(true) :
    loader('//www.googletagservices.com/tag/js/gpt.js', doProvide);
});
