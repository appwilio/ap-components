module.exports = function (bh) {
     bh.match("date_pub", function (ctx){
         ctx.attr('pubdate', true);
     });
};
