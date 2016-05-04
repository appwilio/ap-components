([{
    mustDeps : [
        {
            block : 'control-group'
        }
    ],
    shouldDeps : [
        {
            block : 'input',
            mods : {
                type : 'datepicker',
            }
        },
        {
            block : 'popup',
            mods : { target : 'anchor' },
        },
        {
            block : 'select',
            mods : { mode : 'radio' }
        }
    ]
}, {
    tech : 'spec.js',
    mustDeps : [
        { tech : 'bemhtml' },
        {
            block : 'popup',
            mods : { target : 'anchor' },
            tech : 'bemhtml',
        },
        {
            block : 'select',
            mods : { mode : 'radio' },
            tech : 'bemhtml',
        },
        {
            block : 'input',
            mods : { type : 'datepicker' },
            tech : 'bemhtml'
        },
    ]
}])
