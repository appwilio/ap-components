block('float')(
    js()(true),
    content()(function(){
        return {
            elem : 'content',
            content : applyNext()
        };
    })
);
