module.exports = function (bh) {
 bh.match('image__wrap', function (ctx){
     ctx
         .tag('figure')
         .attrs({
             'itemscope' : true,
             'itemtype'  : 'http://schema.org/ImageObject'
         });
 });
};
