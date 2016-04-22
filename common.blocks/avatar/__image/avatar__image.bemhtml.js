block('avatar').elem('image').def()(
    applyNext(function () {
        return {
            block : 'image',
            url : this.ctx.url,
            mix : [{ block : this.ctx.block, elem : 'image' }]
        };
    })
);
