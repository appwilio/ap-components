modules.define('spec',
    ['button', 'i-bem-dom', 'jquery', 'BEMHTML'],
    function(provide, Button, bemDom, $, BEMHTML) {

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
        button = bemDom.init($(BEMHTML.apply(bemjson)).appendTo('body')).bem(Button);
    });

    afterEach(function() {
        bemDom.destruct(button.domElem);
    });

    it('should has disabled mod', function() {
        button.start().stop().setMod('disabled').hasMod('disabled').should.be.true;
    });
});

provide();
});
