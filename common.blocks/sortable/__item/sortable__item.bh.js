module.exports = function(bh) {
    bh.match('sortable__item', function(ctx, json){
        ctx
            .attr('draggable', 'true');
    });
}
