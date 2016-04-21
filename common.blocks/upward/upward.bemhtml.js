block('upward')(
    mix()([{ block : 'scrollto', mods : { target : 'position' },js : true }]),
    js()(true),
    content()(
        function(){
            return {
                elem : 'button',
                content : '↑'
            };
        }
    )
);
