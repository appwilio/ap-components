block('link').mod('action', 'lightbox')(
    mix()(function () {
        return [{
            block : 'lightbox',
            js : {
                url : this.ctx.url,
                config : this.ctx.config || ''
            }
        }];
    })
);
