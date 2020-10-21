modules.define(
    'spec',
    ['tabs', 'i-bem-dom', 'jquery', 'BEMHTML', 'radio-group', 'chai'],
    function(provide, Tabs, bemDom, $, BEMHTML) {

        describe('tabs', function() {
            var tabs;

            function buildTabs(bemjson) {
                return bemDom.init($(BEMHTML.apply(bemjson)).appendTo('body'))
                    .bem(Tabs);
            }

            beforeEach(function() {
                tabs = buildTabs({
                    block : 'tabs',
                    tabs : [
                        {
                            title : 'First',
                            content : 'First tab content',
                            checked : true
                        },
                        {
                            title : 'Second',
                            content : 'Second tab content'
                        }
                    ]
                });
            });

            afterEach(function() {
                bemDom.destruct(tabs.domElem);
            });

            it('should return current tab index', function(){
                tabs.getVal().should.be.equal(0);
            });

            describe('changeTab', function() {
                it('should show the right tab on changeTab call', function() {
                    var currentVal = tabs.getVal(),
                        id = tabs._elem('box', 'selected', true).params.id;

                    id.should.eq(currentVal);

                    tabs.changeTab(1);
                    id = tabs.getVal();

                    id.should.be.eq(1);

                });
            });
        });

        provide();

    });
