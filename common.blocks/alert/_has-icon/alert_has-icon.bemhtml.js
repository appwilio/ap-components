block('alert').mod('has-icon', true).content()(
    function () {
        return [
            {
                elem : 'aside',
                content : this.ctx.icon || { elem : 'icon', elemMods : { status : this.mods.status } }
            },
            applyNext()
        ];
    }
);
