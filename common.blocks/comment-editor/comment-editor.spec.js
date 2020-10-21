modules.define(
    'spec',
    ['comment-editor', 'i-bem-dom', 'jquery', 'BEMHTML', 'sinon'],
  function(provide, CommentEditor, bemDom, $, BEMHTML, sinon){

describe('comment-editor', function(){
    var editor;

    beforeEach(function() {
        editor = build({
            block : 'comment-editor',
        });
    });

    afterEach(function() {
        bemDom.destruct(editor.domElem);
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

            editor._elem('body').domElem.html().should.be.equal('');
            editor.setVal(val);
            editor._elem('body').domElem.html().should.be.equal(val);

            editor._elem('body').domElem.html(val2);
            editor._elem('body').domElem.trigger('keyup');
            editor.getVal().should.equals(val2);
        });
        it('should filter change events', function(){
            var val = 'my custom val',
                spy = sinon.spy();
            editor._events().on('change', spy);

            editor._elem('body').domElem.html(val);
            editor._elem('body').domElem.trigger('keyup');
            editor._elem('body').domElem.trigger('keyup');
            editor._elem('body').domElem.trigger('keyup');
            spy.should.be.calledOnce;

            editor.setVal('newval');
            editor.setVal('newval');
            editor.setVal('newval');
            spy.should.be.calledTwice;
        });
        it('should reset comment val', function(){
            var val = 'my custom val';
            editor.setVal(val);
            editor._elem('clear').domElem.trigger('click');
            editor.getVal().should.be.equal('');
        });

        it('should emit `clear` event', function(){
            var spy = sinon.spy();
            editor._events().on('clear', spy);
            editor._elem('clear').domElem.trigger('click');
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
    return bemDom.init($(BEMHTML.apply(bemjson)).appendTo('body'))
        .bem(CommentEditor);
}

provide();
});
