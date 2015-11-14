module.exports = function(bh) {
    bh.match('sortable', function(ctx, json){
        ctx
            .attr('aria-dropeffect', 'move');
    });
}
