modules.define('modal', function(provide, BEMDOM) {

provide(BEMDOM.decl({ blcok : this.name, modName : 'has-header', modVal : true }, {
    setContent : function(content){
        BEMDOM.update(this.elem('container'), content);
    }
}));

});
