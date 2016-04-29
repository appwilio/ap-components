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

        it('must set new value by setVal method', function(){
            var val = 'my custom val';
            editor.setVal(val);
            editor.getVal().should.be.equal(val);
        });
        it('should sync body and control', function(){
            var val = 'my custom val',
                val2 = 'new value';

            editor.elem('body').html().should.be.equal('');
            editor.setVal(val);
            editor.elem('body').html().should.be.equal(val);

            editor.elem('body').html(val2);
            editor.elem('body').trigger('keyup');
            editor.getVal().should.equals(val2);
        });
        it('should filter change events', function(){
            var val = 'my custom val',
                spy = sinon.spy();
            editor.on('change', spy);

            editor.elem('body').html(val);
            editor.elem('body').trigger('keyup');
            editor.elem('body').trigger('keyup');
            editor.elem('body').trigger('keyup');
            spy.should.be.calledOnce;

            editor.setVal('newval');
            editor.setVal('newval');
            editor.setVal('newval');
            spy.should.be.calledTwice;
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

    describe('content filter', function(){
        it('should filter whitespaces', function(){
            var content = {
                'text' : 'text',
                ' text ' : 'text',
                'text ' : 'text',
                ' text   ' : 'text',
                'white    space' : 'white space',
                'white space' : 'white space'
            };
            for(var src in content) {
                if(content.hasOwnProperty(src)){
                    editor.filterContent(src).should.equals(content[src]);
                }
            }
        });

        it('should filter &nbsp;', function(){
            var content = {
                'text' : 'text',
                '&nbsp;text&nbsp;' : 'text',
                'text&nbsp;' : 'text',
                ' text &nbsp; &nbsp; ' : 'text',
                'white&nbsp;space' : 'white space',
            };
            for(var src in content) {
                if(content.hasOwnProperty(src)){
                    editor.filterContent(src).should.equals(content[src]);
                }
            }
        });

        it('should filter <br>', function(){
            var content = {
                'text with br' : 'text with br',
                'single <br>' : 'single',
                'double<br><br> text' : 'double<br> text',
                'double <br> <br>' : 'double <br>',
                '<br>three<br><br>' : 'three',
                '<div><br></div>' : ''
            };
            for(var src in content) {
                if(content.hasOwnProperty(src)){
                    editor.filterContent(src).should.equals(content[src]);
                }
            }
        });
        it('should apply filters to content', function(){
            var content = '<br>Assets is  <i>awesome</i><br><br>';
            editor.setVal(content);
            editor.getVal().should.equals('Assets is <i>awesome</i>');
        });
    });
});

function build(bemjson) {
    return BEMDOM.init($(BEMHTML.apply(bemjson)).appendTo('body'))
        .bem('comment-editor');
}

provide();
});
