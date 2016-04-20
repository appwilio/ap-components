modules.define(
    'spec',
    ['tabs', 'i-bem__dom', 'jquery', 'BEMHTML', 'radio-group', 'chai'],
    function(provide, Tabs, BEMDOM, $, BEMHTML) {

        describe('tabs', function() {
            var tabs;

            function buildTabs(bemjson) {
                return BEMDOM.init($(BEMHTML.apply(bemjson)).appendTo('body'))
                    .bem('tabs');
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
                BEMDOM.destruct(tabs.domElem);
            });

            it('should return current tab index', function(){
                tabs.getVal().should.be.equal(0);
            });

            describe('changeTab', function() {
                it('should show the right tab on changeTab call', function() {
                    var currentVal = tabs.getVal(),
                        id = tabs.elemParams(tabs.elem('box', 'selected', true)).id;

                    id.should.eq(currentVal);

                    tabs.changeTab(1);
                    id = tabs.getVal();

                    id.should.be.eq(1);

                });
            });
        });

        provide();

    });
