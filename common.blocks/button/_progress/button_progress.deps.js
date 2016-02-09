([{
    mustDeps: [],
    shouldDeps: [
        {elem : 'elastic-loader'},
        {
            block : 'functions',
            elem : 'timeout'
        },
        {
            mods : {
                view : ['success', 'error', 'warning', 'pseudo']
            }
        },
        {
            block: 'popup',
            mods : {
                theme : 'vr',
                target: 'anchor',
                autoclosable : true,
                hastail: true,
                padding: 'l',
                animate: 'zoom'
            }
        }
    ]
},
{
    tech : 'js',
    shouldDeps: [
        {
            block: 'popup',
            mods : {
                theme : 'vr',
                target: 'anchor',
                autoclosable : true,
                hastail: true
            },
            tech: 'bemhtml'
        }
    ]
}])
