module.exports = function (bh) {
 bh.match('image_lazy_scroll', function (ctx) {
     ctx.mix({ 'block' : 'scrollspy', 'js' : { 'offset' : '-30' } });
 });
};
