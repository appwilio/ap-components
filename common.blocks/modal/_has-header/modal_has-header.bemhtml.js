block('modal').mod('has-header', true)(
    def()(function() {
        return applyNext({
            _header : this.ctx.header
        });
    }),

    elem('content').content()(function(){
        return [
            {
                elem : 'header',
                content : [
                    this._header,
                    this.mods['has-close'] && { elem : 'close' }
                ]
            },
            {
                elem : 'container',
                content : applyNext()
            }
        ];
    })
);
