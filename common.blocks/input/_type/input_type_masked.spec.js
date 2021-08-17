modules.define('spec',
    ['input', 'jslib__maskedinput', 'BEMHTML', 'i-bem-dom'],
    function(provide, Input, $, BEMHTML, bemDom) {

    describe('input_type_masked', function(){
        var block;
        beforeEach(function(){
            block = bemDom.init($(BEMHTML.apply({
                block : 'input',
                mods : { type : 'masked' },
                js : { mask : '99.99.9999' },
                name : 'date'
            })).appendTo('body')).bem(Input);
        });
        afterEach(function(){
            // bemDom.destruct(block.domElem);
        });

        it('just stub');
    });

    provide();
});
