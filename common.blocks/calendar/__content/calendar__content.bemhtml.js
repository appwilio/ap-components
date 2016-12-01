block('calendar').elem('content')(
    def()(function(){
        this.selected = this.ctx.selected || true; // FIXME что то здесь не так
        return applyNext();
    }),
    content()(function(){
        return [
            { elem : 'switcher', mods : { dest : 'prev' }, content : this.switchers[0] },
            { elem : 'title' },
            { elem : 'switcher', mods : { dest : 'next' }, content : this.switchers[1] },
            { elem : 'grid' }
        ];
    })
);
