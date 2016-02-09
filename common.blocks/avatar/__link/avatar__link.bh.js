module.exports = function (bh) {
    bh.match('avatar__link', function (ctx) {
        ctx.tag('a');
    });
};
