modules.define('textarea', ['i-bem__dom'], function(provide, BEMDOM, Textarea) {

provide(Textarea.decl({ block : this.name, modName : 'height', modVal : 'auto' }, {

    _updateHeight : function(){
        this.nextTick(function(){
            var control = this.findElem('control')[0];
            control.style.height = 'auto';
            control.style.height = control.scrollHeight + 'px';
        });
    }
}, {
    live: function(){
        this.liveBindTo('control', 'keydown change focusin cut paste', this.prototype._updateHeight);
        this.liveBindTo('control', 'cut', this.prototype._updateHeight);
        this.liveBindTo('control', 'paste', this.prototype._updateHeight);
        this.liveBindTo('control', 'focusout', function(){
            this.elem('control').css('height', 'auto');
        });
    }
}));

})
