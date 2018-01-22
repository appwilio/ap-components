modules.define('textarea',
    function(provide, Textarea) {

provide(Textarea.declMod({ modName : 'height', modVal : 'auto' }, {

    _updateHeight : function(){
        this._nextTick(function(){
            var control = this._elem('control').domElem[0];
            control.style.height = 'auto';
            control.style.height = control.scrollHeight + 'px';
        });
    }
}, {
    onInit : function(){
        this._domEvents('control')
            .on('keydown change focusin cut paste', this.prototype._updateHeight)
            .on('cut', this.prototype._updateHeight)
            .on('paste', this.prototype._updateHeight)
            .on('focusout', function(){
                this._elem('control').domElem.css('height', 'auto');
            });

        this.__base.apply(this, arguments);
    }
}));

});
