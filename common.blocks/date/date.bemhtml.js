block('date')(
  tag()('time'),
  def()(function(){
    if(this.ctx.unix_ts){
      var date = new Date(this.ctx.unix_ts * 1000),
          iso = date.toISOString();
          apply('attrs');
      return applyNext({ datetime: iso });
    }
    }
));
