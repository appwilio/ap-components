block('link').mod('action', 'gallery')(
    mix()(function () {
        return [{
            block : 'gallery',
            js : {
                url : this.ctx.url,
                config : this.ctx.config || ''
            }
        }];
    })
);
