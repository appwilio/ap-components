modules.define('input', ['i-bem__dom'], function(provide, BEMDOM) {

provide(BEMDOM.decl({ block : this.name, modName : 'type', modVal : 'date' }, {
    beforeSetMod : {
        'focused' : {
            '' : function(){
                return this._checkFocused();
            },
        }
    },
    onSetMod: {
        js: {
            inited: function() {
                //this.__base.apply(this, arguments);
                this._val = this.params.date;
                this._date = this._parseDate(this._val) || new Date();

                this._day = this.findBlockOn('day', 'input');
                this._month = this.findBlockOn('month', 'select');
                this._year = this.findBlockOn('year', 'input');

                this._day.on('change', this._setDay, this);
                this._month.on('change', this._setMonth, this);
                this._year.on('change', this._setYear, this);
            }
        },
    },

    _setDay: function(e, data){
        e.stopPropagation();
        //if(data && this._day.hasMod('focused')){ return;}

        var d = new Date(this._date.getTime());
        d.setDate(this._day.getVal());
        this.setDate(d);
    },
    _setMonth: function(e, data){
        e.stopPropagation();
        //if(data && this._month.hasMod('focused')){ return;}
        var d = new Date(this._date.getTime());
        d.setMonth(this._month.getVal());
        this.setDate(d);
    },
    _setYear: function(e, data){
        e.stopPropagation();
        //if(data && this._year.hasMod('focused')){ return;}
        var d = new Date(this._date.getTime());
        d.setFullYear(this._year.getVal());
        this.setDate(d);
    },

    _parseDate: function(valSrc){

        if(!valSrc){
            return this._date;
        }

        var vals = valSrc.split('.');

        if(vals.length < 3){
            return this._date;
        }

        var day =   parseInt(vals[0]),
            month = parseInt(vals[1]),
            year =  parseInt(vals[2]),
            date = new Date(year, month, day);
        return date;
    },

    setDate : function(date){
        if(date !== this._date){
            this._date = date;

            this._day.setVal(this._date.getDate(), {source : 'date'});
            this._month.setVal(this._date.getMonth(), {source : 'date'});
            this._year.setVal(this._date.getFullYear(), {source : 'date'});
            this.emit('change');
        }
    },

    setVal : function(val, data){

        if(val !== this._val && this._checkFocused()){
            console.log(val);
            var date = this._parseDate(val);
            this.setDate(date);
        }

        return this;
    },

    getVal : function(){
        return [
            ('0' + this._date.getDate()).slice(-2),
            ('0' + this._date.getMonth()).slice(-2),
            this._date.getFullYear(),
        ].join('.');
    },

    _checkFocused: function(){
        return !(this._day.hasMod('focused') || this._month.hasMod('focused') || this._year.hasMod('focused'));
    },
}));

})
