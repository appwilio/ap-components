/* global modules:false */

modules.define('attach',
               ['i-bem__dom'],
               function(provide, BEMDOM) {

    BEMDOM.decl({ block : 'attach' }, {

        _onChange : function() {
            var control = this.findElem('control');
            this._files = control[0].files;
            this.__base.apply(this, arguments);
        },

        getFile : function(){
            return this._files? this._files[0] : undefined;
        },

        getFiles : function(){
            return this._files;
        }
    });

    provide(BEMDOM);

});

