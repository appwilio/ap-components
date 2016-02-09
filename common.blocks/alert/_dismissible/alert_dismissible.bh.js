module.exports = function (bh) {
 bh.match("alert_dismissible", function (ctx){
     ctx.content([
         {
             'elem' : 'dismiss',
         },
         ctx.content()
     ], true);
 });
};
