([
    {
        mustDeps : { block : 'i-bem', elems : 'dom' },
        shouldDeps : [
            { block : 'radio-group', mods : { theme : 'vr', type : ['button', 'line'] } },
            { elem : 'box', mods : { selected : true } }
        ]
    },
    {
        tech : 'spec.js',
        shouldDeps : [
            {
                block : 'tabs',
                tech : 'bemhtml'
            }
        ]
    }
])
