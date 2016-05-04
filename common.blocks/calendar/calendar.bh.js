module.exports = function(bh) {
    bh.match('calendar', function(ctx) {
        var switchers = ctx.param('switcher') || ['пред.', 'след.'],
            date = ctx.param('date')? new Date(ctx.param('date')) : new Date();
        ctx.tParam('theme', ctx.mod('theme'));
        ctx.tParam('size',  ctx.mod('size'));

        ctx.js({
            date : date.getTime(),
            switchers : switchers
        });
        ctx.content({
            block : 'calendar',
            elem : 'content',
            date : date,
            switchers : switchers
        }, true);
    });
};
