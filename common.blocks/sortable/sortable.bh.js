module.exports = function(bh) {
    bh.match('sortable', function(ctx){
        ctx
            .js(true)
            .attr('aria-dropeffect', 'move');
    });
};
