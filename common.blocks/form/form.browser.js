/**
 * @module form
 */
modules.define('form',
['i-bem__dom'],
function(provide, BEMDOM) {

/**
 * Form declaration
 */
provide(BEMDOM.decl(this.name, /** @lends form.prototype */{
    /**
     * Returns field by name
     * @type {FormField[]}
     */
    getFieldByName : function(name) {
        var needleDom = this.domElem.find('[data-name=' + name + ']');
        return this.findBlockOn(needleDom, { block : 'form-field' });
    },
}));

});
