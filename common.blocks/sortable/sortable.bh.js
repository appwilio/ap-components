module.exports = function(bh) {
    bh.match('sortable', function(ctx){
        ctx
            .attr('aria-dropeffect', 'move');
    });
};
