module.exports = function(bh) {
    bh.match('collapse__tick', function(ctx) {
        ctx
            .tag('span')
            .mix({ block : 'icon' });
    });
};
