([
    {
        mustDeps : [
            {
                block : 'i-bem-dom',
            },
        ]
    },
    {
        tech : 'tmpl-spec.js',
        shouldDeps : [
            {
                block : 'alert',
                mods : {
                    dismissible : true,
                    dismiss : 'auto',
                    'has-icon' : true
                }
            }
        ]
    },
    {
        tech : 'spec.js',
        mustDeps : [
            {
                block : 'alert',
                mods : {
                    dismissible : true,
                },
                tech : 'js'
            },
            {
                block : 'alert',
                mods : {
                    dismissible : true,
                    dismiss : 'auto'
                },
                tech : 'bemhtml'
            },
            {
                block : 'alert',
                elem : 'dismiss',
                tech : 'bemhtml'
            },
            {
                block : 'jquery'
            }
        ]
    }
])
