block('comment-editor').elem('control')(
    tag()('input'),
    mix()({
      block : 'comment-editor',
      elem : 'control'
    }),
    attrs()(function() {
      return {
        type : 'hidden',
        name : this.ctx.name,
        value : this.ctx.content,
        id : this.generateId()
      };
    })
);
