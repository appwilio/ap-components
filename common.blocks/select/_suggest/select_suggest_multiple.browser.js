/* global modules:false */

modules.define('select', function(provide, Select) {

Select.decl({ block : 'select', modName : 'suggest', modVal : 'multiple' }, {
    beforeSetMod : {
        'focused' : {
            '' : function(){
                var searchFocused = this._searchInput.hasMod('focused');
                return !searchFocused && this.__base.apply(this, arguments);
            }
        }
    },

    onSetMod : {
        'js' : {
            'inited' : function(){
                this.__base.apply(this, arguments);
            }
        }
    }
});
provide(Select);

});

