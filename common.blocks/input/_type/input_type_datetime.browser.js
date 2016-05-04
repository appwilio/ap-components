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
                this._dateInput.on('change', function(){
                    this.emit('change', this._collectData());
                }, this);
                this._hourInput = this.findBlockOn('hours', 'select');
                this._minInput = this.findBlockOn('mins', 'select');
            }
        }
    },

    _collectData : function(){
        var date = this._dateInput.getDate(),
            hour = this._hourInput.getVal(),
            min  = this._minInput.getVal();
        date.setHours(hour, min);

        var t1 = this._date.getTime(),
            t2 = date.getTime();

        if(t1 === t2) {
            return this._date;
        }

        this._date = date;
        this.emit('change', this._date);
        return this._date;
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
        this.__base.apply(this, arguments);
        var ptp = this.prototype;
        // this.liveInitOnBlockInsideEvent('change', 'input', ptp._collectData);
        this.liveInitOnBlockInsideEvent('change', 'select', ptp._collectData);
        return false;
    }
});
provide(Input);

});

