module.exports = function (bh) {
 bh.match("widget__preloader", function ($ctx){
     $ctx.content([
         {
             'block' : 'spin',
             'mods' : {
                 'size' : 'l',
                 'theme' : 'vr',
                 'visible' : true
             }
         }
     ]);
 });
};
