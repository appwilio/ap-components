([{
    mustDeps: [],
    shouldDeps: [
        {
            block: 'objects'
        },
        {
            block: 'icon',
            mods: {
                type: 'edit',
                font: true
            }
        },
        {
            block: 'modal',
            mods: {
                visible: true,
                theme: 'vr',
                autoclosable: true,
                'has-close': true
            }
        },
        {
            block: 'media-editor'
        },
    ]
},
{
    tech: 'js',
    shouldDeps: [
        {
            block: 'modal',
            mods: {
                'has-close': true
            },
            elems: [
                'close'
            ]
        },
        {
            block: 'media-editor'
        }
    ].map(function(item){ /* https://ru.bem.info/forum/527 */
        item.tech = 'bemhtml';
        return item;
    })
}
])
