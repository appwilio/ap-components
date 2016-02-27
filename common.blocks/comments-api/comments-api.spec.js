modules.define('spec',
               ['comments-api'],
               function(provide, CApi) {

describe('comments-api', function(){

    it('Should have add method', function(){
        CApi.add.should.be.a.Function;
    });

    it('Should have getMessage method', function(){
        CApi.getMessage.should.be.a.Function;
    });

});

   provide();
});

