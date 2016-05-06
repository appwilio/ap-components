module.exports = function(bh){
    bh.match('attach__control', function(ctx){
        ctx.attr('multiple', !!ctx.tParam('_attach').mods.multiple);
    });
};
