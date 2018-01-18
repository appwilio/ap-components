modules.define('modal',
    ['i-bem-dom'],
    function(provide, bemDom, Modal) {

provide(Modal.declMod({ modName : 'has-header' }, {
    /**
     * @override
     */
    setContent : function(content){
        bemDom.update(this._elem('container').domElem, content);
        return this;
    }
}));

});
