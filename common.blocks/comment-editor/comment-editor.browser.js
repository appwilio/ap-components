/**
 * @module comment-editor
 */
modules.define('comment-editor', ['i-bem__dom', 'control'], function(provide, BEMDOM, Control) {

/**
 * @exports
 * @class comment-editor
 * @abstract
 * @bem
 */
provide(BEMDOM.decl({block: this.name, baseBlock: 'control'}, /** @lends comment-editor.prototype */ {
    onSetMod: {
        js: {
            inited: function() {
                this.__base.apply(this, arguments);
                this.bindTo('body', 'keyup', this._onBodyChange);
                this.bindTo('clear', 'click', this.clear);
            }
        }
    },

    /**
     * Clear comment-form
     * @fires clear
     */
    clear: function(){
        this.setVal('');
        this.emit('clear');
        this.emit('change', '');
    },

    /**
     * Callback on change comment text
     * @callback
     * @emits change
     */
    _onBodyChange: function(){
        var html = this.elem('body').html();
        var old = this.elem('control').val();
        if(html === old){
            return;
        }
        this.elem('control').val(html);
        this.emit('change', html);
    },

    setVal: function(val){
        this.__base.apply(this, arguments);
        this.elem('control').val(val);
        this.elem('body').html(val);
        this.emit('change', val);
    },

}));

});
