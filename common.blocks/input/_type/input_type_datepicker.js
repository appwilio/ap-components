modules.define('input', ['i-bem__dom', 'BEMHTML', 'popup'], function(provide, BEMDOM, BEMHTML, Input) {

provide(Input.decl({ block : 'input', modName : 'type', modVal : 'datepicker' }, {

    onSetMod : {
        js : {
            inited : function() {
                this.__base.apply(this, arguments);
                this._getPopup().setAnchor(this);

                this.getCalendar()
                .on('change', function(_, data) {
                    this.setDate(data.date);
                    this._popup.delMod('visible');
                }, this);
            }
        },
        focused : {
            'true' : function() {
                this._getPopup().setMod('visible');
            }
        }
    },

    _getPopup : function(){
        return this._popup || (this._popup = this.findBlockInside('popup'));
    },

    getCalendar : function(){
        return this._calendar || (this._calendar = this._getPopup().findBlockInside('calendar'));
    },

    _formatDate : function(date){
        var day = date.getDate(),
            month = date.getMonth() + 1;
        return [day < 10? '0' + day : day,
                month < 10? '0' + month : month,
                date.getFullYear()
                ].join('.');
    },

    setDate : function(date){
        this.setVal(this._formatDate(date));
        this.getCalendar().setDate(date);
        return this;
    },

    getDate : function(){
        return this.getCalendar().getDate();
    },

}));

});
