/**
 * @module form-field
 */
modules.define('form-field',
['i-bem__dom'],
function(provide, BEMDOM) {

/**
 * Field block
 */
provide(BEMDOM.decl(this.name, /** @lends form-field.prototype */{
    onSetMod : {
        'js' : {
            'inited' : function() {
                this.__base.apply(this, arguments);
            }
        }
    },
    /**
     * Returns field name
     * @returns {String}
     * @public
     */
    getName : function() {
        return this.domElem.attr('data-name');
    }
}));

});
