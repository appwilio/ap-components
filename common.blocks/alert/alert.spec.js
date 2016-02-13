/* global modules:false */

modules.define('spec',
               ['alert', 'i-bem__dom', 'jquery', 'BEMHTML'],
               function(provide, Alert, BEMDOM, $, BEMHTML) {

describe('alert', function(){
    var alert;

    beforeEach(function() {
        alert = BEMDOM.init($(BEMHTML.apply({
            block : 'alert',
            mods : {
                dismissible : true
            },
            content : 'some text'
        })).appendTo('body'))
                    .bem('alert');
    });

    afterEach(function() {
        BEMDOM.destruct(alert.domElem);
    });

    it('Should hide by dismiss method', function(){
        alert.dismiss();
        alert.hasMod('hidden').should.be.true;
    });

    it('Should toggle hovered mod', function(){
        alert.hasMod('hovered').should.be.false;
        alert.domElem
            .trigger('mouseover');
        alert.hasMod('hovered').should.be.true;
        alert.domElem
            .trigger('mouseout');
        alert.hasMod('hovered').should.be.false;
    });

    it('Should hide on dismiss button', function(){
        alert.hasMod('hidden').should.be.false;
        alert.elem('dismiss').trigger('click');
        alert.hasMod('hidden').should.be.true;
    });

});
provide();

});

