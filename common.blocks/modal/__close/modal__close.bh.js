module.exports = function(bh) {
     bh.match('modal__close', function (ctx){
         ctx
             .tag('i')
             .mix({ block : 'popup', elem : 'close' });
     });
};
