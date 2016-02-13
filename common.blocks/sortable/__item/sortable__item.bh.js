module.exports = function(bh) {
    bh.match('sortable__item', function(ctx){
        ctx.attr('draggable', 'true');
    });
};
