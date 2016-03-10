/* global modules:false */

modules.define('comment-form',
               ['i-bem__dom', 'comments-api', 'dom', 'events__channels', 'jquery', 'functions__timeout'],
               function(provide, BEMDOM, Api, dom, Channel, $, timeout) {

BEMDOM.decl('comment-form', {
    onSetMod : {
        'js' : {
            'inited' : function(){
                this._form = this.findBlockOn('form');
                this._timeout = 4000;
                this._editor = this.findBlockInside('comment-editor');
                this._editor.on('clear', this.clear, this);
                this._editor.on('change', this._onTextChange, this);
                this._submit = this.findBlockOn('submit', 'button');
            }
        },
        'focused' : {
            'true' : function() {
                this.delMod('collapsed');

                this.bindToDoc('click', function(e){
                    if(dom.contains(this.domElem, $(e.target))) {
                        return;
                    }
                    this.delMod('focused');
                }
                );
            },
            '' : function() {
                this.setMod('collapsed', true);
                this.unbindFromDoc('click');
            },
        },
        'state' : {
            'progress' : function(){
                this._submit.setMod('disabled');
                this._editor.setMod('disabled');
            },
            'sent' : function(){
                this.clear();
                this._submitOrigintext = this._submit.getText();

                var count = Math.floor(this._timeout / 1000),
                    submit = this._submit,
                    updateCounter = function(){
                    submit.setText('Защита от спама ' + count--);
                };

                this._interval = setInterval(updateCounter, 1000);
                updateCounter();

                timeout(this._timeout).then(
                   function(){
                       clearInterval(this._interval);
                       this._submit.delMod('disabled');
                       this._submit.setText(this._submitOrigintext);
                       this._editor.delMod('disabled');
                       this.delMod('state');
                    },
                    this
                );

                this._timeout += 1000;
            },
        }
    },

    validate : function(){
        this._form.validate();
        if(this._form.getStatus()) {
            this.create();
        }
    },

    /**
     * Коммент создан успешно
     * @param {Object} comment comment entry
     * @callback
     */
    _onCreate : function(comment){
        this.setMod('state', 'sent');
        Channel('comment').emit('add', comment);
        this.clear();
    },

    /**
     * Не удалось создать коммент
     * @callback
     */
    _onFail : function(){
        this.setMod('state', 'sent');
        /* global console: false */
        console.error(Api.getMessage());
    },

    /**
     * Cоздает новый комментарий
     */
    create : function(){
        this.setMod('state', 'progress');
        var comment = this._form.getVal();
        this._create(this.params.post, comment);
    },

    _create : function(postId, comment){
        Api.add(postId, comment)
           .then(this._onCreate, this)
           .catch(this._onFail, this);
    },

    /**
     * Set comment-form should be answer to another comment
     * @param {Object} parentInfo parent comment info
     * like {parent: 123, author: "Author Name"}
     */
    setAnswerTo : function(parentInfo){
        this.setParent(parentInfo.parent);
        this.setText([
            '<a class="comment__to-inline"',
            'href="#comment-' + parentInfo.parent + '">',
            parentInfo.author + ',',
            '</a>',
            '&nbsp;'
        ].join(''));
        this.findBlockInside('body', 'comment-editor').setMod('focused');
    },

    /**
     * Reset form values
     */
    clear : function(){
        this.setText('');
        this.setParent(null);
    },

    setParent : function(parentId) {
        this._form.getFieldByName('parent').setVal(parentId);
        this.setMod('answer', !!parentId);
    },

    setText : function(text){
        this.findBlockInside('body', 'comment-editor').setVal(text);
    },

    _onSubmit : function(e) {
        e.preventDefault();
        this.validate();
        return false;
    },

    _onTextChange : function(e, val){
        this.findBlockOn('submit', 'button').setMod('disabled', !val);
    }

}, {

    live : function(){
        var focus = function(){
            this.nextTick(
                function(){
                    this.setMod('focused');
            });
        };
        this.liveInitOnBlockInsideEvent(
            { modName : 'focused', modVal : true },
            'comment-editor',
            focus
        );
        this.liveBindTo('submit', this.prototype._onSubmit);
        this.liveBindTo('pointerclick', focus);
        this.liveBindTo('body', 'focusin', focus);
        return false;
    }
});

provide(BEMDOM);

});

