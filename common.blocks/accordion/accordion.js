modules.define('accordion',
               ['i-bem-dom', 'collapse'],
               function(provide, bemDom, Collapse) {

provide(bemDom.declBlock(this.name, {

    /**
     * Закрывает все блоки кроме того что только что открыли
     * @callback
     * @param e BEM event
     */
    collapseOther : function(e){
        var keepOpen = e.target;
        this
            .findChildBlocks({ block : Collapse, modName : 'opened', modVal : true })
            .forEach(function(collapse){
                collapse === keepOpen || collapse.delMod('opened');
            });
    }

}, {
    lazyInit : true,
    onInit : function() {
        this._events(Collapse)
            .on({ modName : 'opened', modVal : true }, this.prototype.collapseOther);
    }
}));

});
