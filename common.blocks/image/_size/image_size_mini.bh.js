module.exports = function (bh) {
 bh.match("image_size_mini", function (ctx){
     ctx.attrs({
         width : 120,
         height: 120
     });
 });
};
