([
{
    mustDeps: [
        {
            block: 'button',
            mods: {
                theme: 'vr',
                size: 's'
            }
        },
    ],
    shouldDeps: [
        {
            block: 'icon',
            mods: {font: true}
        },
        {
            mods: {
                editable: true,
                type: 'image'
            }
        },
        {
            block: 'api'
        },
        {
            block : 'confirm',
            mods : {
                type : 'modal',
                theme : 'vr',
                size : 'm'
            }
        },
        {
            elem : 'retry'
        }
    ]
},
{
    tech: 'js',
    shouldDeps: [
        {
            block: 'button',
            mods: {
                theme: 'vr',
                size: 's'
            },
            tech: 'bemhtml'
        },
        {
            elem : 'retry',
            tech: 'bemhtml'
        },
        {
            block : 'confirm',
            mods : {
                type : 'modal',
            },
            tech : 'bemhtml'
        }
    ]
},
{
    tech: 'spec.js',
    mustDeps: [
        {
            block: 'i-bem',
            elem: 'dom',
        },
        {
            block: 'attach-preview',
            tech: 'bemhtml'
        },
        {
            block: 'jquery'
        }
    ]
}
])
