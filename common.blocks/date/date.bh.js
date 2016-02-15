module.exports = function (bh) {
 bh.match('date', function (ctx, json){
     ctx.tag('time');

     if(ctx.param('unix_ts')){
         var date = new Date(json.unix_ts * 1000),
             iso = date.toISOString();
         ctx.attr('datetime', iso);
     }
 });
};
