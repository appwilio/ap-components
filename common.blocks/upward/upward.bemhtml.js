block('upward')(
    mix()([{ block : 'scrollto', mods : { target : 'position' }, js : true }]),
    js()(true),
    content()({ elem : 'button', content : '↑' })
);
