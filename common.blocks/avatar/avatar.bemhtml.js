block('avatar')(
    def()(function() {
        this.mods.default = !this.ctx.image? this.mods.default : false;
        return applyNext();
    }),
    content()(function() {
        return {
            elem : 'link',
            attrs : { href : this.ctx.url },
            content : {
                elem : 'image',
                url : this.ctx.image
            }
        };
    })
);
