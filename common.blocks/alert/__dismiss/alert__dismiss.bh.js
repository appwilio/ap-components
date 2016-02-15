module.exports = function (bh){
     bh.match('alert__dismiss', function (){
         return {
             block : 'button',
             mix : { block : 'alert', elem : 'dismiss' },
             attrs : { 'aria-label' : 'Close' },
             icon : { block : 'popup', elem : 'close' }
         };
     });
};
