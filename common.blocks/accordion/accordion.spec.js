modules.define(
    'spec',
    ['accordion', 'collapse', 'i-bem__dom', 'jquery', 'BEMHTML'],
    function(provide, Accordion, collapse, BEMDOM, $, BEMHTML) {

describe('accordion', function() {
    var accordion;

    beforeEach(function() {
        accordion = buildCollapse(
            {
                block : 'accordion',
                content : [
                    { block : 'collapse' },
                    { block : 'collapse' },
                ]
            }
        );
    });

    afterEach(function() {
        BEMDOM.destruct(accordion.domElem);
    });

    it('should delete opened mod on other collapses', function(){
        var collapses = accordion.findBlocksInside('collapse');

        collapses[0].setMod('opened');
        collapses[0].hasMod('opened').should.be.true;
        collapses[1].hasMod('opened').should.be.false;

        collapses[1].setMod('opened');
        collapses[0].hasMod('opened').should.be.false;
        collapses[1].hasMod('opened').should.be.true;
    });

});

function buildCollapse(bemjson) {
    return BEMDOM.init($(BEMHTML.apply(bemjson)).appendTo('body'))
        .bem('accordion');
}

provide();

});
