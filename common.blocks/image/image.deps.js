({
    tech : 'tmpl-spec.js',
    shouldDeps : [
        {
            block : 'image'
        },
        {
            block : 'image',
            mods : {
                size : ['thumbnail', 'mini', 'middle', 'large', 'w400'],
                semantic : 'schema',
                load : 'lazy',
                lazy : 'scroll',
                wrap : true,
            }
        }
    ]
})
