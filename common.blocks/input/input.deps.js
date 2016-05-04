([{
    tech : 'tmpl-spec.js',
    mustDeps : [
        {
            block : 'input',
            mods : {
                type : [
                    'datepicker',
                    'datetime',
                ]
            }
        }
    ],
    shouldDeps : []
}, {
    tech : 'spec.js',
    mustDeps : [
        {
            block : 'input',
            mods : {
                type : [
                    'datepicker',
                    'datetime',
                ]
            }
        },
        {
            block : 'input',
            mods : {
                type : [
                    'datepicker',
                    'datetime',
                ]
            },
            tech : 'bemhtml'
        }
    ]
}])
