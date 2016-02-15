module.exports = function (bh) {
     bh.match('link_action_scroll', function (ctx){
         ctx.mix({
             'block' : 'scrollto',
             'mods' : {
                 'target' : 'anchor'
             }
         });
     });
};
