modules.define('object-format', function(provide, OF){
    OF.decl({ block : 'object-format', modName : 'author', modVal : true }, {

        // http://confluence.appwilio.com/pages/viewpage.action?pageId=4489404
        toString : function(obj){
            return obj.username + ' (' + obj.email + ')';
        }
    });
    provide(OF);
});
