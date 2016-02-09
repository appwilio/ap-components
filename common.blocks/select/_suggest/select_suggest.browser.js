/* global modules:false */

modules.define('select',
               ['i-bem','i-bem__dom', 'BEMHTML', 'typehead', 'object-format'],
               function(provide, BEM, BEMDOM, BEMHTML, Typehead, Oformat, Select) {

Select.decl({block: 'select', modName: 'suggest'}, {
    onSetMod: {
        'js': {
            'inited': function(){
                this.__base.apply(this, arguments);
                this._searchInput = this.findBlockOn('input', 'input');
                this._searchInput.on('change', this._onInputChange, this);

                //setup typehead
                this.typehead = BEM.create({block: 'typehead', mods: {source: this.getMod('source')}});
                this.typehead.setSource(this.params.src);
                this._searchStart = this.params.start || 4;
                this._nameField = this.params.field || 'name';
                this._valField = this.params.valField || this._nameField;

                this._saveVals();

                var nameField = this._nameField;
                this._objFormater = this.params.formater ?
                    BEM.create({
                        block: 'object-format',
                        mods: this.params.formater
                    }):
                    {toString: function(obj){return obj[nameField]}};

            },
            '': function(){
                delete this.typehead;
            }
        },
    },

    _saveVals: function(){
        var checked = this._getCheckedItems();
        this._checkedItems = [];
        checked.map(function(item){
            var text = item.getText();
            var val  = item.getVal();
            this._checkedItems.push({text: text, val: val});
        }, this);
    },

    _onInputChange: function(e, data){
        if (data && (data.source === 'popup' || data.source === 'clear')) {
            return;
        }
        var searchTo = e.target.getVal();
        if (searchTo.length < this._searchStart){
            this._clear();
            return;
        }
        this.search(searchTo);
    },

    _clear: function(){
    },

    _onMenuChange : function() {
        this.__base.apply(this, arguments);
        this._saveVals();
    },

    /**
     * Redraw autocomplete menu
     * @protected
     */
    _updateMenu: function(items){
        var saved = this._getSavedItems();
        if(!items){
            this._menu.setContent(saved);
            return;
        }
        var uniqVals = [];
        var options = saved
            .concat(items.map(this._getMenuItem, this))
            .filter(function(item, i, arr){
                var val = item.val;
                var exists = uniqVals.indexOf(val) !== -1;
                if (!exists){
                    uniqVals.push(val);
                }
                return !exists;
            }, this);

        this._menu
            .setContent(
                BEMHTML.apply(options)
            );

        this.setMod('opened', true);
    },

    _setText: function(){
        var hasChecked = this._getCheckedItems();
        if (!hasChecked.length){
            return;
        }

        var text = hasChecked[0].getText();
        this._searchInput.setVal(text, {source: 'popup'});
    },

    /**
     * Return each menu-item
     * @override
     * @protected
     * @returns {Object} menu-item
     */
    _getMenuItem: function(item){
        return {
            block: 'menu-item',
            mods: {theme: this.getMod('theme')},
            val: item[this._valField],
            content: this._objFormater.toString(item)
        };
    },

    _getSavedItems: function(){
        return this._checkedItems.map(function(item){
            return {
                block: 'menu-item',
                mods: {theme: this.getMod('theme'), checked: true},
                val: item.val,
                content: item.text
            };
        }, this);
    },

    /**
     * Fill autocomplete
     * @param val {String} value to autocomplete
     */
    search: function(val){
        this.setMod('progress', true);

        this.typehead.search(val).then(
            function(variants){
                this.delMod('progress');
                variants.length? this._updateMenu(variants): this._clear();
            },
            function(){
                this.delMod('progress');
                this._clear();
            },
            this
        );
    },
});
provide(Select);

});

