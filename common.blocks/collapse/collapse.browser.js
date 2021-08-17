
modules.define('collapse', ['i-bem-dom'], function(provide, bemDom) {

    /**
     * @exports
     * @class collapse
     * @bem
     */
    provide(bemDom.declBlock(this.name, {
        onSetMod : {
            'opened' : function(_, modVal) {
                this.findChildElem('switcher', true)
                    .setMod('opened', modVal);

                this.findChildElem('content', true)
                    .setMod('visible', modVal);
            }
        },

        /**
         * On BEM click event handler
         * @param {Event} e
         * @callback
         * @protected
         */
        _onSwitcherClick : function(e) {
            if(e.isDefaultPrevented()) return
            e.preventDefault();
            this.toggleMod('opened');
        }

    }, {
        onInit : function() {
            this._domEvents('switcher').on('click', this.prototype._onSwitcherClick);
        }
    }));

});
