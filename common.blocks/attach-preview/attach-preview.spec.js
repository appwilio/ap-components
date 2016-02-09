modules.define('spec',
               ['attach-preview', 'i-bem__dom', 'jquery', 'BEMHTML', 'sinon'],
               function(provide, Preview, BEMDOM, $, BEMHTML, sinon) {

  describe('attach-preview', function(){
    var preview;
    beforeEach(function() {
        preview = BEMDOM.init($(BEMHTML.apply({
            block : 'attach-preview',
            id: 'unic',
            alt: 'sample alt',
            title: 'sample title',
        })).appendTo('body'))
                    .bem('attach-preview');
    });

    afterEach(function() {
        BEMDOM.destruct(preview.domElem);
    });


    describe('id', function(){
        it('Must have id', function(){
            preview.hasMod('id').should.be.true;
            preview.getId().should.be.equal('unic');
        });
        it('Modifier should be equal property and attribute', function(){
            preview.getMod('id').should.be.equal(preview.getId());
            preview.domElem.attr('id').should.be.equal(preview.getId());
        });
        it('update id', function(){
            preview.setId('123');
            preview.getMod('id').should.be.equal('123');
            preview.domElem.attr('id').should.be.equal('123');
            preview.getId().should.be.equal('123');
        });
    });

    describe('order', function(){
        it('Must have default order', function(){
            preview.order.should.be.a.Integer;
        });
        it('`updateOrder` must sets order by domElem index', function(){
            preview.setOrder(12);
            preview.updateOrder().should.be.equal(preview.domElem.index());
        });
        it('Order must change', function(){
            preview.setOrder(90);
            preview.setOrder('abc');
            preview.order.should.be.equal(90);
        });
        it('Order not a string', function(){
            preview.setOrder(90);
            preview.setOrder('abc');
            preview.order.should.be.equal(90);
        });
        it('`setOrder()` return actual order', function(){
            preview.setOrder(11).should.be.equal(11);
            preview.setOrder('abc').should.be.equal(11);
        });
    });

    describe('meta', function(){
        it('should return attributes object', function(){
            var attrs = preview.getAttrs();
            attrs.should.be.an.Object;
            attrs.should.have.ownProperty('alt');
            attrs.should.have.ownProperty('title');
        });
        it('should return init values', function(){
            var attrs = preview.getAttrs();
            attrs.alt.should.be.equal('sample alt');
            attrs.title.should.be.equal('sample title');
        });
        it('should return init values', function(){
            var attrs = preview.getAttrs();
            attrs.alt.should.be.equal('sample alt');
            attrs.title.should.be.equal('sample title');
        });
    });

    describe('uploading', function(){
        //var server = sinon.fakeServer.create();
        it('should set url', function(){
            var url = '/posts/1/attachments';
            preview.setApiUrl(url);
            preview._apiurl.should.be.equal(url);
        });
    });


  });
  provide();

});
