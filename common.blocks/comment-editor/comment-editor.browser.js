/**
 * @module comment-editor
 */
modules.define('comment-editor', ['i-bem-dom', 'control'], function(provide, bemDom, Control) {

/**
 * @exports
 * @class comment-editor
 * @abstract
 * @bem
 */
provide(bemDom.declBlock(this.name, Control, /** @lends comment-editor.prototype */ {
    onSetMod : {
        js : {
            inited : function() {
                this.__base.apply(this, arguments);
                !this.hasMod('disabled') && this._bindEvents();
            }
        },
        'focused' : {
            'true' : function(){
                this.setCaretToEnd();
                this.__base.apply(this, arguments);
            }
        },
        'disabled' : {
            'true' : function(){
                this._unbindEvents();
                this._elem('control').domElem.attr('contenteditable', null);
            },
            '' : function(){
                this._bindEvents();
                this._elem('control').domElem.attr('contenteditable', '');
            }
        }
    },

    /**
     * Перемещает каретку в конец текста
     */
    setCaretToEnd : function(){
        var el = this._elem('body').domElem[0],
            len = el.childNodes.length;
        if(!len) return;

        var range = document.createRange(),
            sel = window.getSelection();
        range.setEndAfter(el.childNodes[len - 1]);
        range.collapse();
        sel.removeAllRanges();
        sel.addRange(range);
    },

    _unbindEvents : function(){
        this._domEvents('body').un('keyup', this._onBodyChange);
        this._domEvents('clear').un('click', this.clear);
    },

    _bindEvents : function(){
        this._domEvents('body').on('keyup', this._onBodyChange);
        this._domEvents('clear').on('click', this.clear);
    },

    /**
     * Вырезает из тела комментария все лишнее
     * @param string content текст комментария
     */
    filterContent : function(content){
        return content
            .replace(/(<br>)+/g, '<br>')
            .replace(/(<br>)$/g, '')
            .replace(/^(<br>)/g, '')
            .replace(/(&nbsp;)+/g, ' ')
            .replace(/<div><br><\/div>/g, '')
            .replace(/\s+/g, ' ')
            .replace(/^\s/, '')
            .replace(/\s$/, '');
    },

    /**
     * Clear comment-form
     * @fires clear
     */
    clear : function(){
        this.setVal('');
        this._emit('clear');
        this._emit('change', '');
    },

    /**
     * Callback on change comment text
     * @callback
     * @emits change
     */
    _onBodyChange : function(){
        var html = this.filterContent(this._elem('body').domElem.html()),
            old = this._elem('control').domElem.val();

        if(html === old){
            return false;
        }
        this._elem('control').domElem.val(html);
        this._emit('change', html);
    },

    /**
     * Устанавливает новое значение
     * @param val string новое значение
     */
    setVal : function(val){
        this.__base.apply(this, arguments);
        if(val === this.getVal()) return;

        var filteredVal = this.filterContent(val);
        this._elem('control').domElem.val(filteredVal);
        this._elem('body').domElem.html(filteredVal);
        this._emit('change', filteredVal);
    }

}, {
    onInit : function(){
        this._domEvents('body').on('pointerclick', function(){
            this.setMod('focused');
        });
        this.__base.apply(this, arguments);
    }
}));

});
