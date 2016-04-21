block('comment-editor').elem('body')(
    mix()({ elem : 'control'}),
    attrs()(function(){
        return {
            tabindex : 0,
            contenteditable : true,
            spellcheck : true,
            placeholder : this.ctx.placeholder
        };
    })
);
