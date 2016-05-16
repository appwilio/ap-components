block('comment-editor')(
  content()(function(){
    return [
      {
        elem : 'control',
        name : this.ctx.name,
        content : this.ctx.content
      },
      {
        elem : 'body',
        placeholder : this.ctx.placeholder,
        content : applyNext(this.ctx.content)
      },
      { elem : 'tools' }
    ];
  })
);
