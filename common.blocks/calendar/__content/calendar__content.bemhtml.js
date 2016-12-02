block('calendar').elem('content')(
    def()(function(){
        this.selected = this.ctx.selected || true; // FIXME что то здесь не так
        return applyNext();
    }),
    content()(function(){
        return [
            { elem : 'switcher', elemMods : { dest : 'prev' }, content : this.switchers[0] },
            { elem : 'title' },
            { elem : 'switcher', elemMods : { dest : 'next' }, content : this.switchers[1] },
            { elem : 'grid' }
        ];
    })
);
