block('comment-editor').elem('control')(
    tag()('input'),
    attrs()(function() {
      return {
        type : 'hidden',
        name : this.ctx.name,
        value : this.ctx.content,
        id : this.generateId()
      };
    })
);
