modules.define(
    'spec',
    ['collapse', 'i-bem__dom', 'jquery', 'BEMHTML'],
    function(provide, collapse, BEMDOM, $, BEMHTML) {

describe('collapse', function() {
    var collapse,
        sw;

    beforeEach(function() {
        collapse = buildCollapse({ block : 'collapse', mods : { 'has-header' : true } });
    });

    afterEach(function() {
        BEMDOM.destruct(collapse.domElem);
    });

    describe('show/hide', function(){
        it('should toggle opened mod on switcher click', function(){
            collapse.hasMod('opened').should.be.false;

            sw = $(collapse.elem('switcher')[0]);
            sw.trigger('click');
            collapse.hasMod('opened').should.be.true;

            sw.trigger('click');
            collapse.hasMod('opened').should.be.false;
        });

        it('should toggle visible mod on content elem', function(){
            collapse.hasMod('opened').should.be.false;

            sw = $(collapse.elem('switcher')[0]);
            sw.trigger('click');
            collapse.hasMod(
                collapse.elem('content'),
                'visible')
                .should.be.true;
        });

        it('should toggle opened mod on switcher elem', function(){
            collapse.hasMod('opened').should.be.false;

            sw = $(collapse.elem('switcher')[0]);
            sw.trigger('click');
            collapse.hasMod(
                collapse.findElem('switcher', true),
                'opened')
                .should.be.true;
        });
    });

});

function buildCollapse(bemjson) {
    return BEMDOM.init($(BEMHTML.apply(bemjson)).appendTo('body'))
        .bem('collapse');
}

provide();

});
