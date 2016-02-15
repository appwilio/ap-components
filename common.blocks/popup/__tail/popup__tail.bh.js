module.exports = function (bh) {
 bh.match('popup__tail', function (ctx){
     ctx
         .attr('aria-hidden', true)
         .tag('i');
 });
};
