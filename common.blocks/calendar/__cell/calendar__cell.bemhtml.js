block('calendar').elem('cell')(
    tag()('td'),
    cls()('i-bem'),
    js()(function(){ return { date : this.ctx.date }; })
);
