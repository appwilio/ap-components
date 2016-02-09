modules.define('confirm', ['i-bem__dom', 'validation_equal'], function(provide, BEMDOM, validation, Confirm) {

provide(BEMDOM.decl({ block : this.name, modName : 'proof', modVal : 'word' }, {
    onSetMod: {
        js: {
            inited: function() {
                this.__base.apply(this, arguments);
                this._field = this.findBlockInside('input');
                this.bindTo(this._field.domElem, 'keyup', this._onKeyUp, this);
                this._submit = this.findBlockOn('yes', 'button');
                this._submit.setMod('disabled');
                this._submit.on({modName : 'disabled', modVal : false}, function(){
                    this.setMod('focused');
                });

                this._validate = validation();
            }
        }
    },

    _onKeyUp : function(){
        var val = this._field.getVal(),
            error = this._validate([val, this.params.word]);
        this._submit.setMod('disabled', !!error);
    }
}));

});
