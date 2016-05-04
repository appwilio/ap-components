modules.define('spec',
    ['input', 'i-bem__dom', 'sinon', 'BEMHTML', 'jquery', 'calendar'],
    function(provide, Input, BEMDOM, sinon, BEMHTML, $){

    describe('input_type_datepicker', function(){
        var input,
            timestamp = 1461962158,
            dateFormatted = '29.04.2016';

        beforeEach(function() {
            input = build({
                block : 'input',
                mods : { type : 'datepicker' },
                date : timestamp,
                val : dateFormatted
            });
        });

        afterEach(function() {
            BEMDOM.destruct(input.domElem);
        });

        it('should show popup on block focused', function(){
            var popup = input._getPopup();
            popup.hasMod('visible').should.be.false();
            input.setMod('focused', true);
            popup.hasMod('visible').should.be.true();
        });

        it('should return calendar block', function(){
            input.getCalendar.should.be.a.Function;
            input.getCalendar().should.be.an.Object;
        });

        it('should serialize date object', function(){
            var dateObj = new Date(timestamp * 1000);
            input._formatDate(dateObj).should.equals(dateFormatted);
        });

        it('should return formatted date', function(){
            input.getVal.should.be.a.Function;
            input.getVal().should.be.a.String;
            input.getVal().should.equals(dateFormatted);
        });

        it('should return date object', function(){
            var dateObj = new Date(timestamp * 1000);
            input.getDate().should.eql(dateObj);
        });

        it('should update date', function(){
            var dateObj = new Date();
            input.getDate().should.not.eql(dateObj);
            input.setDate(dateObj);
            input.getDate().should.eql(dateObj);
        });

        it('should not emit `change` on same date', function(){
            var dateObj = new Date(),
                spy = sinon.spy();
            input.setDate(dateObj);
            input.on('change', spy);
            input.setDate(dateObj);
            spy.calledOnce.should.be.false();
        });

        it('should emit `change`', function(){
            var dateObj = new Date(),
                spy = sinon.spy();
            input.on('change', spy);
            input.setDate(dateObj);
            input.setDate(dateObj);
            spy.calledOnce.should.be.true();
        });
    });

    provide();
    function build(bemjson) {
        return BEMDOM.init($(BEMHTML.apply(bemjson)).appendTo('body'))
            .bem('input');
    }
});

