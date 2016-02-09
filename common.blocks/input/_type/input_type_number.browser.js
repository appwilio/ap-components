modules.define('input', ['i-bem__dom', 'keyboard__codes'], function(provide, BEMDOM, key) {

provide(BEMDOM.decl({block: this.name, modName : 'type', modVal : 'number'}, {
    onSetMod: {
        js: {
            inited: function() {
                this.__base.apply(this, arguments);
                this._val = parseInt(this.elem('control').val());
                this._max = this.params.max;
                this._min = this.params.min;
            }
        },
        focused : {
            'true' : function(){
                this.bindTo('keydown', function(e){
                    val = this.getVal();

                    if(e.keyCode === key.UP){
                        this.setVal(++val);
                    }

                    if(e.keyCode === key.DOWN){
                        this.setVal(--val);
                    }
                });
            },
            '': function(){
                this.unbindFrom('keydown');
                var val = this._val;
                if(val <= this._min){
                    val = this._min;
                }
                if(val >= this._max){
                    val = this._max;
                }
                this.setVal(val);
            }
        }
    },

    getVal : function(){
        return this.__base.apply(this, arguments);
    },

    setVal : function(valsrc, data){
        val = parseInt(valsrc);

        if(!isNaN(val) && val !== this._val) {
            this._val = val;

            var control = this.elem('control');
            control.val() !== val && control.val(val);

            this.emit('change', data);
        }
        if(isNaN(val) || val != valsrc){
            var control = this.elem('control');
            control.val(this._val);
        }

        return this;
    },
}));

})
