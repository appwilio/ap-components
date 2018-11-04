modules.define(
    'spec',
    ['collapse', 'i-bem-dom', 'jquery', 'BEMHTML'],
    function(provide, Collapse, bemDom, $, BEMHTML) {

describe('collapse', function() {
    var collapse,
        sw;

    beforeEach(function() {
        collapse = buildCollapse({ block : 'collapse', mods : { 'has-header' : true } });
    });

    afterEach(function() {
        bemDom.destruct(collapse.domElem);
    });

    describe('show/hide', function(){
        it('should toggle opened mod on switcher click', function(){
            collapse.hasMod('opened').should.be.false;

            sw = collapse._elem('switcher').domElem;
            sw.trigger('click');
            collapse.hasMod('opened').should.be.true;

            sw.trigger('click');
            collapse.hasMod('opened').should.be.false;
        });

        it('should toggle visible mod on content elem', function(){
            collapse.hasMod('opened').should.be.false;

            sw = collapse._elem('switcher').domElem;
            sw.trigger('click');
            collapse
                ._elem('content')
                .hasMod('visible')
                .should.be.true;
        });

        it('should toggle opened mod on switcher elem', function(){
            collapse.hasMod('opened').should.be.false;

            sw = collapse._elem('switcher').domElem;
            sw.trigger('click');
            collapse.findChildElem('switcher', true).hasMod('opened').should.be.true;
        });
    });

});

function buildCollapse(bemjson) {
    return bemDom.init($(BEMHTML.apply(bemjson)).appendTo('body'))
        .bem(Collapse);
}

provide();

});
