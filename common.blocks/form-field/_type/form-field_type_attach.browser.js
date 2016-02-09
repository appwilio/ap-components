modules.define('form-field', function(provide, BEMDOM) {

provide(BEMDOM.decl({ block : this.name, modName : 'type', modVal : 'attach' }, {
    getVal : function(){
        attach = this.getControl();
        return attach.hasMod('multiple')? attach.getFiles() : attach.getFile();
    }
}));

})
