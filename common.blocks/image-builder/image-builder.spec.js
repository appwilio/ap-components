/* global modules:false */

modules.define('spec',
               ['image-builder'],
               function(provide, Builder) {

describe('image-builder', function(){

    it('Should return correct path', function(){
        var size = 'w91',
            url = 'https://mydomain.example.com/images/1988/01/image.png';
        Builder.getResizedUrl(url, size).should.be.equal('https://mydomain.example.com/images/1988/01/w91/image.png');
    });

});
provide();

});

