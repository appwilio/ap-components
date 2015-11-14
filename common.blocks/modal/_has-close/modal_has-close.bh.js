module.exports = function(bh) {
     bh.match("modal_has-close__content", function (ctx){
         ctx.content([
             {'elem': 'close'},
             ctx.content()
         ], true);
     });
};
