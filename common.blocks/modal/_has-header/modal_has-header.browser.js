modules.define('modal', ['i-bem__dom'], function(provide, BEMDOM, Modal) {

provide(Modal.decl({ modName : 'has-header', modVal : true }, {
    setContent : function(content){
        BEMDOM.update(this.elem('container'), content);
    }
}));

});
