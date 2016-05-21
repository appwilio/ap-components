block('gpt')(
    def()(function(){
        this.ctx.id = this.ctx.id || this.generateId();
        return applyNext();
    }),
    js()(function(){
      return { slot : this.ctx.slot, id : this.ctx.id };
    }),
    attrs()(function() { return { id : this.ctx.id }; })
);
