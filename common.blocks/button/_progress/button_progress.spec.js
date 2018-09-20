modules.define('spec',
    ['button', 'i-bem__dom', 'jquery', 'BEMHTML'],
    function(provide, Button, BEMDOM, $, BEMHTML) {

describe('button_progress', function() {
    var button;
    beforeEach(function() {
        var bemjson = {
            block : 'button',
            mods : {
                progress : true,
            },
            text : 'test'
        };
        button = BEMDOM.init($(BEMHTML.apply(bemjson)).appendTo('body')).bem('button');
    });

    afterEach(function() {
        BEMDOM.destruct(button.domElem);
    });

    it('should has disabled mod', function() {
        button.start().stop().setMod('disabled').hasMod('disabled').should.be.true;
    });
});

provide();
});
