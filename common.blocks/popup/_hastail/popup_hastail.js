modules.define('popup',
    ['i-bem-dom', 'objects'],
    function(provide, bemDom, objects, Popup) {

provide(Popup.declMod({ modName : 'hastail' }, {
    getDefaultParams : function () {
        return objects.extend(
            this.__base(),
            {
                mainOffset : 5,
                viewportOffset : 5
            });
    },

    setContent : function(content) {
        bemDom.update(this._elem('content').domElem, content);
        return this;
    },
}));

});

