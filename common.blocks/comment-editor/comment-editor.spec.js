modules.define(
    'spec',
    ['comment-editor', 'i-bem__dom', 'jquery', 'BEMHTML', 'sinon'],
  function(provide, ce, BEMDOM, $, BEMHTML, sinon){

describe('comment-editor', function(){
    var editor;

    beforeEach(function() {
        editor = build({
            block : 'comment-editor',
        });
    });

    afterEach(function() {
        BEMDOM.destruct(editor.domElem);
    });

    describe('value', function(){

        it('must have getVal method', function(){
            editor.getVal.should.be.a.Function;
        });

        it('must have setVal method', function(){
            editor.getVal.should.be.a.Function;
        });

        it('must set new value', function(){
            var val = 'my custom val';
            editor.setVal(val);
            editor.getVal().should.be.equal(val);
        });

        it('should reset comment val', function(){
            var val = 'my custom val';
            editor.setVal(val);
            editor.elem('clear').trigger('click');

            editor.getVal().should.be.equal('');
        });

        it('should emit `clear` event', function(){
            var spy = sinon.spy();
            editor.on('clear', spy);
            editor.elem('clear').trigger('click');

            spy.should.have.been.calledOnce;
        });
    });
});

function build(bemjson) {
    return BEMDOM.init($(BEMHTML.apply(bemjson)).appendTo('body'))
        .bem('comment-editor');
}

provide();
});
