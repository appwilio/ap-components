/* global modules:false */

modules.define('input',
               ['i-bem__dom'],
               function(provide, BEMDOM, Input) {
Input.decl({ block : 'input', modName : 'type', modVal : 'datetime' }, {
    onSetMod : {
        'js' : {
            'inited' : function(){
                this._date = new Date(this.params.date);
                this._dateInput = this.findBlockInside({
                    block : 'input',
                    modName : 'type',
                    modVal : 'datepicker'
                });
                this._hourInput = this.findBlockOn('hours', 'select');
                this._minInput = this.findBlockOn('mins', 'select');
            }
        }
    },

    _collectData : function(){
        var date = this._dateInput.getVal(true),
            hour = this._hourInput.getVal(),
            min  = this._minInput.getVal();
        date.setHours(hour, min);
        this._date = date;
    },

    /**
     * returns selected date
     * @returns {Integer} UNIX Timestamp
     */
    getVal : function(){
        this._collectData();
        return this._date.getTime() / 1000;
    }

}, {
    live : function(){
        this.__base();
        this.liveInitOnBlockInsideEvent('change', 'calendar', function(){
            this._collectData();
        });
    }
});
provide(Input);

});

