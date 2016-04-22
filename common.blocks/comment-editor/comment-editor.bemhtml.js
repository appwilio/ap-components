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
        content : applyNext()
      },
      {
        elem : 'tools',
        content : {
            block : 'input',
            elem : 'clear',
            mix : [{
                block : this.ctx.block,
                elem : 'clear'
            }]
        }
      }
    ];
  })
);
