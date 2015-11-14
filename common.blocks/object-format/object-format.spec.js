modules.define('spec', ['object-format', 'i-bem'], function(provide, OFormat, BEM){
    describe('object-format', function(){
        var Formater = BEM.create({block: 'object-format'});

        it('Should have `toString` method', function(){
            Formater.toString.should.be.an.instanceOf(Function);
        });
        it('Should process objects', function(){
            Formater.toString({}).should.be.equal('[object Object]');
            Formater.toString({name: 'vasya'}).should.be.equal('[object Object]');
            Formater.toString({name: function(){}}).should.be.equal('[object Object]');
        });
        it('Should process strings', function(){
            Formater.toString('').should.be.equal('');
        });
        it('Should process arrays', function(){
            Formater.toString([1,2,3]).should.be.equal('1,2,3');
        });
        it('Should process numbers', function(){
            Formater.toString(12).should.be.equal('12');
        });
        //it('Requires parameter', function(){
            //Formater.toString().should.throw();
        //});

        describe('author', function(){
            var Formater = BEM.create({block: 'object-format', mods: {author: true}});
            var author = {username: 'Vasya', email: 'pupkin@vr.com'};

            it('Should have author mod', function(){
                Formater.hasMod('author').should.be.true;
            });
            it('Should process author', function(){
                Formater.toString(author).should.be.equal('Vasya (pupkin@vr.com)');
            });
        });
    });

    provide();
});
