block('modal').mod('has-header', true).content()(function(){
    return [
        {
            elem : 'header',
            content : [
                this.ctx.header,
                this.mods['has-close'] && { elem : 'close' }
            ]
        },
        {
            elem : 'container',
            content : this.ctx.content
        }
    ];
});
