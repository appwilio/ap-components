module.exports = function (bh) {
 bh.match("image_size_thumbnail", function (ctx){
     ctx.attrs({
         width : 205,
         height: 138
     });
 });
};
