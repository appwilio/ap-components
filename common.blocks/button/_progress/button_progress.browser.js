modules.define('button',
    ['i-bem-dom', 'BEMHTML', 'functions__timeout', 'functions', 'popup'],
    function(provide, bemDom, BEMHTML, timeout, functions, Popup, Button) {

provide(Button.declMod({ modName : 'progress', modVal : '*' }, {
    beforeSetMod : {
        'process' : {
            '' : function(){
                var now = new Date(),
                    time = now - this._startTime,
                    onTime = time > this._to;
                if(!onTime){
                    this._nextTick(function(){
                        this.delMod('process');
                    });
                }
                return onTime;
            }
        }
    },
    onSetMod : {
        js : {
            inited : function(){
                this.__base.apply(this, arguments);
                this._setTexts();
                this._to = this.params.timeout || 1000;
                this._popupTo = this.params.popupVisible || 10000;
                this._defaultStatus = this.getMod('status');
            }
        },
        'process' : {
            'started' : function(){
                this._startTime = new Date();
                this.setText(this._progressText || this._defaultText);

                this._popup && this._popup.delMod('visible');
            }
        },
        'status' : {
            'success' : function(){
                this.setText(this._successText || this._defaultText);
                timeout(this._popupTo).then(this._reset, this);
            },
            'error' : function(){
                this.setText(this._failText || this._defaultText);
                timeout(this._popupTo).then(this._reset, this);
            }
        }
    },

    /**
     * Set progress State
     * @param {Int} percents progress
     * @public
     */
    setProgress : functions.noop,

    _reset : function(){
        if(!this.persistState){
            this.setText(this._defaultText);
            this.setMod('status', this._defaultStatus);
        }
        this.delMod('process');
        this._popup && this._popup.delMod('visible');
    },

    _setTexts : function(){
        this._defaultText = this.params.text || this.getText();
        this._progressText = this.params.progressText;
        this._successText = this.params.successText;
        this._failText = this.params.failText;
    },

    /**
     * Start progress animation
     */
    start : function(){
        this.setMod('process', 'started');
        return this;
    },

    /**
     * Stop progress
     * @param {String} status status to set 'error, succcess, warning'
     * @param {String} text new button text
     * @param {String} popup add popup with text
     * @param {Boolean} persist that will be persistant state
     */
    stop : function(status, text, popup, persist){
        this.persistState = !!persist;

        if(popup){
            this.on({ modName : 'process', modVal : false }, function(){
                this.setPopup(popup);
            });
        }
        this.delMod('process');
        this.setMod('status', status);

        if(!!text){
            this.setText(text);
        }
        return this;
    },

    _getPopup : function(){
        return this._popup
            || (this._popup = bemDom.after(this.domElem, BEMHTML.apply(this.__self.popup(this.getMods()))).bem(Popup);
    },

    setPopup : function(text){
        this._getPopup().setAnchor(this.domElem);
        this._getPopup().setContent(text);
        this._popup.setMod('visible');
    },

    /**
     * @override
     */
    _onKeyDown : function() {
        if(this.hasMod('process', 'started')) return;
        this.__base.apply(this, arguments);
    },

    /**
     * @override
     */
    _onPointerPress : function() {
        if(this.hasMod('process', 'started')) return;
        this.__base.apply(this, arguments);
    }

}, {
    popup : function(buttonMods){
        return {
            block : 'popup',
            mods : {
                target : 'anchor',
                theme : buttonMods.theme,
                hastail : true,
                autoclosable : true,
                animate : 'zoom',
                padding : buttonMods.size
            },
            directions : ['bottom-center', 'top-center']
        };
    }
}));

});
