modules.define('spec',
    ['input', 'jslib__maskedinput', 'BEMHTML', 'i-bem__dom'],
    function(provide, Input, $, BEMHTML, BEMDOM) {

    describe('input_type_masked', function(){
        var block;
        beforeEach(function(){
            block = BEMDOM.init($(BEMHTML.apply({
                block : 'input',
                mods : { type : 'masked' },
                js : { mask : '99.99.9999' },
                name : 'date'
            })).appendTo('body')).bem('input');
        });
        afterEach(function(){
            // BEMDOM.destruct(block.domElem);
        });

        it('just stub', function(){
        });
    });

    provide();
});
