block('collapse')(
    js()(true),
    content()(function(){
        return [
            {
                elem : 'header',
                mix : { elem : 'switcher' },
                content : [
                    this.ctx.preview,
                    { elem : 'switcher' }
                ]
            },
            {
                elem : 'content',
                content : this.ctx.content
            }
        ];
    })
);
