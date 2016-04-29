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
provide(BEMDOM.decl({ block : this.name, baseBlock : Control }, /** @lends comment-editor.prototype */ {
    onSetMod : {
        js : {
            inited : function() {
                this.__base.apply(this, arguments);
                !this.hasMod('disabled') && this._bindEvents();
            }
        },
        'focused' : {
            'true' : function(){
                var el = this.elem('body')[0],
                    len = el.childNodes.length;
                if(len){
                    var range = document.createRange(),
                        sel = window.getSelection();
                    range.setEndAfter(el.childNodes[len - 1]);
                    range.collapse();
                    sel.removeAllRanges();
                    sel.addRange(range);
                }
                this.__base.apply(this, arguments);
            }
        },
        'disabled' : {
            'true' : function(){
                this._unbindEvents();
                this.elem('control').attr('contenteditable', null);
            },
            '' : function(){
                this._bindEvents();
                this.elem('control').attr('contenteditable', '');
            }
        }
    },

    _unbindEvents : function(){
        this.unbindFrom('body', 'keyup', this._onBodyChange);
        this.unbindFrom('clear', 'click', this.clear);
    },

    _bindEvents : function(){
        this.bindTo('body', 'keyup', this._onBodyChange);
        this.bindTo('clear', 'click', this.clear);
    },

    /**
     * Вырезает из тела комментария все лишнее
     * @param string content текст комментария
     */
    filterContent : function(content){
        return content.replace(/[<br>]+/g,"<br>");
    },

    /**
     * Clear comment-form
     * @fires clear
     */
    clear : function(){
        this.setVal('');
        this.emit('clear');
        this.emit('change', '');
    },

    /**
     * Callback on change comment text
     * @callback
     * @emits change
     */
    _onBodyChange : function(){
        var html = this.filterContent(this.elem('body').html()),
            old = this.elem('control').val();

        if(html === old){
            return false;
        }

        this.elem('control').val(html);
        this.emit('change', html);
    },

    setVal : function(val){
        this.__base.apply(this, arguments);
        this.elem('control').val(val);
        this.elem('body').html(val);
        this.emit('change', val);
    }

}, {
    live : function(){
        this.liveBindTo('body', 'pointerclick', function(){
            this.setMod('focused');
        });
        return this.__base.apply(this, arguments);
    }
}));

});
