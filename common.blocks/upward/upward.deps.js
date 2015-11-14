([{
    mustDeps : [
        { block : 'i-bem', elems : ['dom'] }
    ],
    shouldDeps: [
        {
            block: 'functions',
            elem: 'throttle'
        },
        {
            block: 'scrollto',
        },
        {
            block: 'scrollto',
            mods: {
                target: 'position'
            }
        }
    ]
},
{
    tech : 'spec.js',
    mustDeps : [
        { tech : 'bemhtml', block : 'upward' },
        { tech : 'bemhtml', block : 'scrollto' },
    ]
},
])
