/* global modules:false */

modules.define('attach',
               ['i-bem-dom'],
               function(provide, bemDom, Attach) {

    provide(bemDom.declBlock(Attach, {

        _onChange : function() {
            var control = this._elem('control').domElem;
            this._files = control[0].files;
            this.__base.apply(this, arguments);
        },

        getFile : function(){
            return this._files? this._files[0] : undefined;
        },

        getFiles : function(){
            return this._files;
        }
    }));

});

