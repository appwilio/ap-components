modules.define('input',['i-bem__dom','BEMHTML'], function(provide, BEMDOM, BEMHTML, Input) {

provide(Input.decl({ modName : 'type', modVal : 'datepicker' }, {

    onSetMod : {
        js : {
            inited : function() {
                this._getPopup().setAnchor(this);

                this.getCalendar()
                .on('change', function(_, data) {
                    this.setVal(this._formatDate(data.date));
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

    _getPopup: function(){
        return this._popup || (this._popup = this.findBlockInside('popup'));
    },

    getCalendar: function(){
        return this._calendar || (this._calendar = this.findBlockInside('calendar'));
    },

    _formatDate: function(date){
        var day = date.getDate(),
            month = date.getMonth()+1;
        return [day < 10? '0' + day : day,
                month < 10? '0' + month : month,
                date.getFullYear()
                ].join('.');
    },

    getVal: function(obj){
        return obj? this.getCalendar().getDate(): this._val;
    }

}));

});
