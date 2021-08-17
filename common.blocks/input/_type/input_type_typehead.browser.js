/* global modules:false */

modules.define('input', [
    'functions__throttle',
    'i-bem',
    'i-bem-dom',
    'popup',
    'spin',
    'menu',
    'keyboard__codes',
    'BEMHTML',
    'typehead'
], function(provide,
    throttle,
    BEM,
    bemDom,
    Popup,
    Spin,
    Menu,
    keyCodes,
    BEMHTML,
    th,
    Input
) {

Input.declMod({ modName : 'type', modVal : 'typehead' }, {

    onSetMod : {
        'js' : {
            'inited' : function(){
                this.__base.apply(this, arguments);

                this._src = this.params.src;
                this._searchStart = this.params.start || 4;
                this._to = this.params.timeout || 550;
                this._nameField = this.params.field || 'name';
                this._valField = this.params.valField || this._nameField;
                this._realVal  = this.params.val;

                this._popup = this.findChildBlock(Popup);
                this._popup.setAnchor(this);

                this._spin = this.findChildBlock(Spin);
                this._menu = this._popup.findChildBlock(Menu);

                // setup typehead
                this.typehead = BEM.create({ block : 'typehead', mods : { 'source' : this.getMod('source') } });
                this.typehead.setSource(this._src);
                this.typehead.searchField = this._nameField;

            },

            '' : function(){
                delete this.typehead;
            }
        },
        'progress' : {
            'true' : function(){
                this._spin.setMod('visible', true);
                this._setHint();
            },
            '' : function(){
                this._spin.delMod('visible');
            }
        },
        'focused' : {
            'true' : function(){
                this.__base.apply(this, arguments);
                this._domEvents()
                    .on('keyup', throttle(this._onKeyUp, this._to))
                    .on('keydown', this._onKeyDown);
                this._events(this._menu).on('item-click', this._onMenuClick, this);

                if(this._hintText){
                    this._elem('hint').domElem.val(this._hintText);
                }
            },
            '' : function(){
                this.__base.apply(this, arguments);
                this._domEvents().un('keyup');
                this._events(this.menu).un('item-click', this._onMenuClick, this);
                this._clear();
            }
        }
    },

    beforeSetMod : {
        'focused' : {
            '' : function(){
                var mf = this._menu.hasMod('hovered');
                this._elem('control').domElem.focus();
                return !mf;
            }
        }
    },

    _onKeyDown : function(e){
        if(e.keyCode === keyCodes.TAB) {
            if(this._hintText){
                e.preventDefault();
                this.complete();
            }
        }
    },

    _onMenuClick : function(e, data){
        this.setVal(data.item.getText(), data.item.getVal());
        this._clear();
        this.setMod('completed', true);
        this.delMod('focused');
    },

    getVal : function(){
        return this.hasMod('completed')? this._realVal : this._val;
    },

    // jshint unused: false
    setVal : function(text, val){
        this.__base.apply(this, arguments);
        if(val) {
            this._realVal = val;
        }
    },

    /**
     * Set value from autocomplete
     */
    complete : function(){
        if(this._hintText){
            this.setVal(this._hintText, this._hintVal);
            this.setMod('completed', true);
            this._clear();
        }
    },

    /**
     * Keyup trigger
     */
    _onKeyUp : function(e){
        if(this._oldVal === this._val || e.keyCode === keyCodes.TAB) {
            return;
        }

        this.delMod('completed');
        if(this._val.length < this._searchStart) {
            this._clear();
            return;
        }

        this.search(this._val);
        this._oldVal = this._val;
    },

    /**
     * Redraw autocomplete menu
     * @protected
     */
    _updateMenu : function(items){
        var fItem = items[0];
        this._setHint(fItem[this._nameField], fItem[this._valField]);

        this._menu
            .setContent(
                BEMHTML.apply(
                    items.map(this._getMenuItem, this)
                )
            );

        this._popup.setMod('visible', items.length > 2); // show-hide popup
    },

    /**
     * Set hint text & value
     */
    _setHint : function(text, val){
        this._hintText = text;
        this._hintVal = val;
        this._elem('hint').domElem.val(this._hintText);
    },

    _clear : function(){
        this._setHint();
        this._popup.setMod('visible', false);
    },

    /**
     * Return each menu-item
     * @override
     * @protected
     * @returns {Object} menu-item
     */
    _getMenuItem : function(item){
        if(!item[this._nameField]) {
            return;
        }

        return {
            block : 'menu',
            elem : 'item',
            val : item[this._valField],
            content : item[this._nameField]
        };
    },

    /**
     * Fill autocomplete
     * @param val {String} value to autocomplete
     */
    search : function(val){
        this.setMod('progress', true);

        this.typehead.search(val).then(
            function(variants){
                this.delMod('progress');
                variants.length? this._updateMenu(variants) : this._clear();
            },
            function(){
                this.delMod('progress');
                this._clear();
            },
            this
        );
    }

});

provide(Input);

});

