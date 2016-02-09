/* global modules:false */

modules.define('input', function(provide, Input) {

Input.decl({modName: 'type', modVal: 'editor'}, {
    onSetMod: {
        'js': {
            'inited': function(){
                this._editor = this.findBlockInside('redactor');
                this._editor.on('change', function(e){
                    e.preventDefault();
                    e.stopPropagation();
                    this.emit('change');
                }, this);
            }
        },
        'focused' : function(name, val){
            this._editor.setMod(name, val);
        },
    },

    getVal: function(){
        return this._editor.getVal();
    },

    setVal: function(val, data){
        this._editor.setVal(val);
        this.emit('change', data);
        return this;
    },
});
provide(Input);

});

