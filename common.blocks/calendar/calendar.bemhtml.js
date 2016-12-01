block('calendar')(
    def()(function(){
        this.date = this.ctx.date? new Date(this.ctx.date) : new Date();
        // TODO move switchers to i18n
        this.switchers = this.ctx.switcher || ['пред.', 'след.'];
        return applyNext();
    }),
    js()(function(){
        return this.extend(applyNext(), { date : this.date.getTime(), switchers : this.switchers });
    }),
    content()(function(){
        return {
            elem : 'content',
            date : this.date,
            switchers : this.switchers
        };
    })
);
