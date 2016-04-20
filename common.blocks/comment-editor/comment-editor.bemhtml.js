block('comment-editor')(
  def()(function() { return applyNext({ val : this.ctx }); }),
  content()(
    function(){
      return [
        {
            elem : 'control'
        },
        {
            elem : 'body',
            placeholder : this.ctx.placeholder,
            content : applyNext()
        },
        {
            elem : 'tools',
            content : [
                {
                    block : 'input',
                    elem : 'clear',
                    mix : {
                        block : this.ctx.block,
                        elem : 'clear'
                    }
                }
            ]
        }
      ];
    }
  )
);
