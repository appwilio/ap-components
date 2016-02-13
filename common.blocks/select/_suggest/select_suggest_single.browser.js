/* global modules:false */

modules.define('select', function(provide, Select) {

Select.decl({ block : 'select', modName : 'suggest', modVal : 'single' }, {
    onSetMod : {
        'js' : {
            'inited' : function(){
                this.__base.apply(this, arguments);
                this._popup.setAnchor(
                    this.findBlockInside('control-group').domElem
                );
            },
        },
    },

    _onInputChange : function(e, data){
        if(data && data.source === 'clear') {
            this._clear();
        }
        this.__base.apply(this, arguments);
    },

    _clear : function(){
        this.setVal();
    },

    _onMenuChange : function() {
        this._setText();
        this.__base.apply(this, arguments);
    },

    _setText : function(){
        var hasChecked = this._getCheckedItems();
        if(!hasChecked.length){
            return;
        }

        var text = hasChecked[0].getText();
        this._searchInput.setVal(text, { source : 'popup' });
    },

});
provide(Select);
});

