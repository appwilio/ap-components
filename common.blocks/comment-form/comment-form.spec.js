modules.define('spec',
               ['comment-form', 'comment-editor', 'events__channels', 'form', 'form-field', 'i-bem__dom', 'jquery', 'BEMHTML', 'sinon'],
               function(provide, CForm, CEditor, Channel, Form, ff, BEMDOM, $, BEMHTML, sinon) {

var model = {
    block : 'comment-form',
    post : 21,
    attachable : false,
},

    comment = {
    body : 'some comment body',
    name : 'tester',
    email :'sinon@gmail.com'
};

describe('comment-form', function(){
    /*
    var form,
        submitButton;

    beforeEach(function() {
        form = buildCForm(model);
        submitButton = form.findBlockOn('submit', 'button');
    });

    afterEach(function() {
        BEMDOM.destruct(form.domElem);
    });

    function fillForm() {
        var formBlock = form.findBlockOn('form');
        formBlock.getFieldByName('body').setVal(comment.body);
        formBlock.getFieldByName('username').setVal(comment.name);
        formBlock.getFieldByName('email').setVal(comment.email);
    }

    describe('validation', function() {

        it('should not send request on empty form', function(){
            sinon.stub(form, 'create');
            submitButton.domElem.trigger('click');

            form.create.should.not.have.been.called;
        });

        it('should trigger validate method', function(){
            sinon.stub(form, 'validate');
            fillForm();
            submitButton.domElem.trigger('click');

            form.validate.should.have.been.calledOnce;
        });

        it('should call create method', function(){
            sinon.stub(form, 'create');
            fillForm();
            submitButton.domElem.trigger('click');

            form.create.should.have.been.calledOnce;
        });
    });

    describe('focus/blur', function(){

        it('Should has collapsed mod by default', function(){
            form.hasMod('collapsed').should.be.true;
        });

        /*
        it('Should has NO collapsed mod on clicked', function(){
            form.domElem.trigger('click');
            form.hasMod('collapsed').should.be.false;
        });

        it('Should expand on comment typing', function(){
            form.elem('body').trigger('click');
            form.hasMod('collapsed').should.be.false;
        });

        it('Should expand on submit', function(){
            form.hasMod('collapsed').should.be.true;
            submitButton.domElem.trigger('click');
            form.hasMod('collapsed').should.be.false;
        });

        it('Should collapse on blur', function(){
            form.hasMod('collapsed').should.be.true;
            submitButton.domElem.trigger('click');
            form.hasMod('collapsed').should.be.false;
            $('body').trigger('click');
            form.hasMod('collapsed').should.be.true;
        });
    });

    describe('answer', function(){

        it('should set form parent', function(){
            var field = form.findBlockOn('form').getFieldByName('parent');
            form.setParent(123);
            field.getVal().should.be.equal(123);
        });

        it('should set comment text', function(){
            var text = [
                'just text',
                '<b>custom html</b>',
                '<div class="divclass">html with <br> newline</div>'
            ],
                field = form.findBlockOn('form').getFieldByName('body');

            for(var i = 0; i < text.length;i++) {
                form.setText(text[i]);
                field.getVal().should.be.equal(text[i]);
            }

        });

        it('should set form answer', function(){
            form.setAnswerTo({ parent : 123, author : 'Dolly' });
        });

        it('should reset answer mod', function(){
            form.setAnswerTo({ parent : 123, author : 'Dolly' });
            form.clear();
            form.hasMod('answer').should.be.false;
        });
    });
    */

});

function buildCForm(bemjson) {
    return BEMDOM.init($(BEMHTML.apply(bemjson)).appendTo('body'))
        .bem('comment-form');
}
   provide();
});
