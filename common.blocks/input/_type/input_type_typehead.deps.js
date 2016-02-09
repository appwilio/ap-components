([{
    mustDeps: [
    ],
    shouldDeps: [
        {
            block: 'typehead',
        },
        {
            block: 'functions',
            elem: 'throttle'
        },
        {
            block: 'popup',
            mods: {
                theme: 'vr',
                target: 'anchor',
                autoclosable: true,
                visible: true
            }
        },
        {
            block: 'input',
            mods: {
                type: 'text',
                'has-spin': true
            },
            elems: [
                'hint'
            ]
        },
        {
            block: 'menu',
        },
        {
            block: 'menu-item',
            mods: {hovered: true}
        }
    ]
},
{
    tech: 'js',
    shouldDeps: [
        {
            block: 'menu-item',
            tech: 'bemhtml'
        }
    ]
}
])
