modules.define(
    'spec',
    ['link', 'i-bem__dom', 'jquery', 'BEMHTML', 'sinon', 'events__channels'],
    function(provide, Link, BEMDOM, $, BEMHTML, sinon, Channel) {

describe('link', function() {
    var link;

    afterEach(function() {
        BEMDOM.destruct(link.domElem);
    });

    describe('link_action_event', function() {

        it('should emit custom event', function() {
            var bemjson = {block: 'link', mods: {action: 'event'}, url: '/', js: {event: 'customevent'}};
            link = BEMDOM.init($(BEMHTML.apply(bemjson)).appendTo('body')).bem('link');

            var spy = sinon.spy(),
                e = $.Event('pointerclick');

            link.on('customevent', spy);
            link.domElem.trigger(e);
            spy.should.have.been.calledOnce;
        });

        it('should not emit custom event on channel', function() {
            var bemjson = {block: 'link', mods: {action: 'event'}, url: '/', js: {event: {e : 'customevent', channel: 'ch'}}};
            link = BEMDOM.init($(BEMHTML.apply(bemjson)).appendTo('body')).bem('link');

            var spy = sinon.spy(),
                spyChannel = sinon.spy(),
                e = $.Event('pointerclick');

            link.on('customevent', spy);
            Channel('ch').on('customevent', spyChannel);
            link.domElem.trigger(e);
            spy.callCount.should.be.equal(0);
            spyChannel.should.have.been.calledOnce;
        });
    });

});

provide();

});
