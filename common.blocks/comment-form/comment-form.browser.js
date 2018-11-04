/* global modules:false */

modules.define('comment-form', [
    'i-bem-dom',
    'comments-api',
    'dom',
    'events__channels',
    'jquery',
    'functions__timeout',
    'form',
    'button',
    'comment-editor'
], function(provide,
    bemDom,
    Api,
    dom,
    Channel,
    $,
    timeout,
    Form,
    Button,
    CommentEditor
) {

provide(bemDom.declBlock(this.name, {
    onSetMod : {
        'js' : {
            'inited' : function(){
                this._form = this.findMixedBlock(Form);
                this._timeout = 4000;
                this._editor = this.findChildBlock(CommentEditor);
                this._editor.on('clear', this.clear, this);
                this._editor.on('change', this._onTextChange, this);
                this._submit = this._elem('submit').on(Button);
            }
        },
        'focused' : {
            'true' : function() {
                this.delMod('collapsed');

                this._domEvents(bemDom.doc).on('click', function(e) {
                    if(dom.contains(this.domElem, $(e.target))) {
                        return;
                    }
                    this.delMod('focused');
                });
            },
            '' : function() {
                this.setMod('collapsed', true);
                this._domEvents(bemDom.doc).un('click');
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
        this._elem('body').findChildBlock(CommentEditor).setMod('focused');
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
        this._elem('body').findChildBlock(CommentEditor).setVal(text);
    },

    _onSubmit : function(e) {
        e.preventDefault();
        this.validate();
        return false;
    },

    _onTextChange : function(e, val){
        this._elem('submit').findMixedBlock(Button).setMod('disabled', !val);
    }

}, {

    lazyInit : false,
    onInit : function(){
        var focus = function(){
            this._nextTick(
                function(){
                    this.setMod('focused');
            });
        };
        this._events(CommentEditor).on({ modName : 'focused', modVal : true }, focus);
        this._domEvents().on('submit', this.prototype._onSubmit);
        this._domEvents().on('pointerclick', focus);
        this._domEvents('body').on('focusin', focus);
    }
}));

});

