block('date').mod('relative',true)(
    js()(function(){
      return { unix : this.ctx.unix_ts};
      }
    )
);
