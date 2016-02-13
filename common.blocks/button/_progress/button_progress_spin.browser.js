modules.define('button', ['i-bem__dom'], function(provide, BEMDOM) {

provide(BEMDOM.decl({ block : this.name, modName : 'progress', modVal : 'spin' }, {
    beforeSetMod : {
        'process' : {
            'started' : function(){
                this._initWidth = this.domElem.width();
                this.domElem.css('width', this._initWidth); // circle
            }
        }
    },
    onSetMod : {
        js : {
            inited : function() {
                this.__base.apply(this, arguments);
            }
        },
        'process' : {
            'started' : function(){
                this.__base.apply(this, arguments);
                var height = this.domElem.height(),
                    margin = (this._initWidth - height) / 2;
                this.domElem.css({
                    'width' : height,
                    'margin-left' : margin,
                    'margin-right' : margin
                }); // circle
            },
            '' : function(){
                this.__base.apply(this, arguments);
                this.domElem.css({
                    'width' : this._initWidth,
                    'margin-left' : '',
                    'margin-right' : ''
                }); // circle
            }
        }
    }
}));

});
