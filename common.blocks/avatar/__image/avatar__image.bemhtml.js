block('avatar').elem('image').replace()(function(){
    return {
            block : 'image',
            url : this.ctx.url,
            mix : [{ block : this.block, elem : 'image' }]
        };
});
