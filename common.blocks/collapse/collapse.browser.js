
modules.define('collapse', ['i-bem__dom'], function(provide, BEMDOM) {

    /**
     * @exports
     * @class collapse
     * @bem
     */
    provide(BEMDOM.decl(this.name, {
        onSetMod : {
            'opened' : function(_, modVal) {
                this.setMod(this.findElem('switcher', true), 'opened',  modVal);
                this.setMod(this.findElem('content', true), 'visible', modVal);
            }
        },

        /**
         * On BEM click event handler
         * @param {events:Event} e
         * @callback
         * @protected
         */
        _onSwitcherClick : function(e) {
            e.preventDefault();
            this.toggleMod('opened');
        }

    }, {
        live : function() {
            this.liveBindTo('switcher', 'click', this.prototype._onSwitcherClick);
        }
    }));

});
