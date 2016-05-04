modules.define('spec',
    ['input', 'i-bem__dom', 'sinon', 'BEMHTML', 'jquery', 'select', 'calendar'],
    function(provide, Input, BEMDOM, sinon, BEMHTML, $){

    describe('input_type_datetime', function(){
        var input,
            timestamp = 1461962158;

        beforeEach(function() {
            input = build({
                block : 'input',
                mods : { type : 'datetime' },
                date : timestamp
            });
        });

        afterEach(function() {
            BEMDOM.destruct(input.domElem);
        });

        it('should return UNIX timestamp', function(){
            input.getVal().should.equals(timestamp);
        });

        describe('events', function(){
            it('should not fire events on getVal', function(){
                var spy = sinon.spy();
                input.on('change', spy);
                input.getVal();
                spy.called.should.be.false();
            });

            it('should call _collectData on date change', function(){
                var spy = sinon.spy(input, '_collectData'),
                    newDate = new Date(),
                    selectDay = input._dateInput;

                selectDay.setDate(newDate);

                spy.callCount.should.equals(1);
                spy.reset();
            });

            it('should fire `change` on select date', function(){
                var spy = sinon.spy(),
                    newDate = new Date(),
                    selectDay = input._dateInput;
                input.on('change', spy);
                selectDay.setDate(newDate);

                spy.calledOnce.should.be.true();
            });

            it('should fire `change` on select hour', function(){
                var spy = sinon.spy(),
                    selectHour = input._hourInput;
                input.on('change', spy);
                selectHour.setVal(20);
                spy.calledOnce.should.be.true();
            });

            it('should fire `change` on select minutes', function(){
                var spy = sinon.spy(),
                    selectMins = input._minInput;
                input.on('change', spy);
                selectMins.setVal(20);
                spy.calledOnce.should.be.true();
            });
        });
    });

    provide();
    function build(bemjson) {
        return BEMDOM.init($(BEMHTML.apply(bemjson)).appendTo('body'))
            .bem('input');
    }
});
