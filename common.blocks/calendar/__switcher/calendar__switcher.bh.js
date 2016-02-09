module.exports = function (bh) {
 bh.match("calendar__switcher", function (ctx){
     ctx.mix({
        'block' : 'button'
     });
 });
};
