modules.define('date',
    ['i-bem__dom', 'moment', 'moment__range', 'functions__timeout'],
    function(provide, BEMDOM, moment, Mrange, timeout) {

provide(BEMDOM.decl({ block : this.name, modName : 'relative', modVal : true }, {
    onSetMod : {
        js : {
            inited : function() {

                if(this.params.unix){
                    this._date = new Date(this.params.unix * 1000);
                    this.startTimer();
                }
            }
        }
    },

    startTimer : function(){
        var range = moment.range(this._date, new Date()),
            to;
        if(range.diff('days') > 30){
            return;
        }
        if(range.diff('days') > 1){
            this.showRelTime();
            return;
        }
        if(range.diff('minutes') < 60) {
            to = moment.duration(1, 'minutes').asMilliseconds();
            timeout(to).then(this.startTimer, this);
        }
        if(range.diff('minutes') >= 60) {
            to = moment.duration(1, 'hours').asMilliseconds();
            timeout(to).then(this.startTimer, this);
        }

        this.showRelTime();
    },

    showRelTime : function(){
        BEMDOM.update(this.domElem, this._getRelTime());
    },

    _getRelTime : function(){
        return moment(this._date).fromNow();
    }
}));

});
