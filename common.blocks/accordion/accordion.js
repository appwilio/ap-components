modules.define('accordion',
               ['i-bem__dom'],
               function(provide, BEMDOM) {

provide(BEMDOM.decl(this.name, {

    /**
     * Закрывает все блоки кроме того что только что открыли
     * @callback
     * @param e BEM event
     */
    collapseOther : function(e){
        var keepOpen = e.target;
        this
            .findBlocksInside({ block : 'collapse', modName : 'opened', modVal : true })
            .map(function(collapse){
                collapse === keepOpen || collapse.delMod('opened');
            });
    },

}, {
    live : function(){
        this.liveInitOnBlockInsideEvent(
            { modName : 'opened', modVal : true },
            'collapse',
            this.prototype.collapseOther
        );
    }
}));

});
