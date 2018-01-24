module.exports = function(bh) {
    bh.match('collapse__title', function(ctx) {
        ctx.tag('span');
    });
};
