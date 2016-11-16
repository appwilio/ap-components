module.exports = function (bh) {
 bh.match('alert_dismissible', function (ctx){
     ctx.applyBase();
     ctx.content([
         ctx.content(),
         { 'elem' : 'dismiss' }
     ], true);
 });
};
