block('list')(
    tag()('ul'),

    content()(function () {
        return (this.ctx.items || []).map(function (item) {
            return {
                elem : 'item',
                tag : 'li',
                content : item
            };
        });
    })
);
