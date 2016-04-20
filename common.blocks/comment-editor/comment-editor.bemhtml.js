block('comment-editor')(
  ctx.tParam('val', ctx.content());
  content()(
    function(){
      return [
        {
            elem : 'control'
        },
        {
            elem : 'body',
            placeholder : this.ctx.placeholder,
            content : this.ctx.content
        },
        {
            elem : 'tools',
            content : [
                {
                    block : 'input',
                    elem : 'clear',
                    mix : {
                        block : this.block,
                        elem : 'clear'
                    }
                }
            ]
        }
      ]
    }
  )
);
