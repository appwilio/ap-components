module.exports = function (bh) {
    bh.match('confirm__keyword', function (ctx){
        ctx.tag('span');
    });
};
