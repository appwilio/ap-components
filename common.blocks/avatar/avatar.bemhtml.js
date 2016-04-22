block('avatar')(
    def()(function() {
    this.mods.default = !this.ctx.image? this.mode.default : (false, true) ;
    return applyNext();
    }),

    content()(function () {
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
