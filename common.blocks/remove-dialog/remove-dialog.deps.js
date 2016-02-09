([{
    mustDeps: [],
    shouldDeps: [
        {
            block : 'confirm',
            mods : {
                theme : 'vr',
                size : 'm',
                type : 'modal',
                proof : 'word'
            }
        },
        {
            block : 'modal',
            mods : {
                theme : 'vr',
                size : 'm'
            }
        },
    ]
},
{
    tech : 'js',
    shouldDeps : [
        {
            block : 'confirm',
            mods : {
                type : 'modal',
                proof : 'word'
            },
            tech: 'bemhtml'
        }
    ]
}])
