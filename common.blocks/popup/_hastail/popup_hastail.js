modules.define('popup', ['objects'], function (provide, objects, Popup) {

    provide(Popup.decl({ modName : 'hastail', modVal : true }, {
        getDefaultParams : function () {
            return objects.extend(
                this.__base(),
                {
                    mainOffset : 5,
                    viewportOffset : 5
                });
        },

        setContent : function(content){
            Popup.update(this.elem('content'), content);
            return this;
        },
    }
  ));

});

