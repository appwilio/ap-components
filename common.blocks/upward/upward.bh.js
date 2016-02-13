module.exports = function (bh) {
     bh.match('upward', function (ctx){
         ctx
             .mix({
                 'block' : 'scrollto',
                 'mods' : { target : 'position' },
                 'js' : true
             })
             .content({
                 'elem' : 'button',
                 'content' : '↑'
             })
             .js(true);
     });
};
