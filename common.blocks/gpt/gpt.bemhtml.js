block('gpt')(
    js()(function(){
      return { slot : this.ctx.slot, id : this.generateId() };
    }),
    attrs()(function() { return { id : this.generateId() }; })
);
