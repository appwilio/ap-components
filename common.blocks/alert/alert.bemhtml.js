block('alert')(
    js()(true),
    attrs()(function(){
      return { role : 'alert' };
    }),
    content()(function(){
        return { elem : 'content', content : applyNext() };
    })
);
