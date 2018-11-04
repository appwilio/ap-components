modules.define(
    'spec',
    ['accordion', 'collapse', 'i-bem-dom', 'jquery', 'BEMHTML'],
    function(provide, Accordion, Collapse, bemDom, $, BEMHTML) {

describe('accordion', function() {
    var accordion;

    beforeEach(function() {
        accordion = buildCollapse(
            {
                block : 'accordion',
                content : [
                    { block : 'collapse' },
                    { block : 'collapse' }
                ]
            }
        );
    });

    afterEach(function() {
        bemDom.destruct(accordion.domElem);
    });

    it('should delete opened mod on other collapses', function(){
        var collapses = accordion.findChildBlocks(Collapse);

        collapses.get(0).setMod('opened');
        collapses.get(0).hasMod('opened').should.be.true;
        collapses.get(1).hasMod('opened').should.be.false;

        collapses.get(1).setMod('opened');
        collapses.get(0).hasMod('opened').should.be.false;
        collapses.get(1).hasMod('opened').should.be.true;
    });

});

function buildCollapse(bemjson) {
    return bemDom.init($(BEMHTML.apply(bemjson)).appendTo('body'))
        .bem(Accordion);
}

provide();

});
