block('calendar').elem('cell')(
    tag()('td'),
    js()(function(){ return { date : this.ctx.date }; })
);
