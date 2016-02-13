module.exports = function(bh) {
    bh.match('modal_has-header', function(ctx){
        ctx.content([
            {
                elem : 'header',
                content : [
                    ctx.param('header'),
                    ctx.mod('has-close') && { elem : 'close' }
                ]
            },
            {
                elem : 'container',
                content : ctx.content()
            }
        ], true);
    });
};
