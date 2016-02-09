module.exports = function(bh) {
    bh.match('attach-preview__retry', function(ctx, json){
        ctx.content({
            block: 'button',
            mods : {
                theme : 'vr',
                status: 'warning',
                size: ctx.mod('size')
            },
            text: 'Загрузить'
        });
    });
}
