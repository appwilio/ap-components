([
{
    shouldDeps: [
        {
            block: 'events', elem: 'channels'
        }
    ]
},
{
    tech: 'tmpl-spec.js',
    shouldDeps: [
        {block: 'link', mods: {
            action: [
                'scroll',
                'lightbox',
                'gallery',
                'event'
            ],
        }}
    ]
},
{
    tech: 'spec.js',
    mustDeps: [
        {
            block: 'link',
            mods: {
                action: [
                    'scroll',
                    'lightbox',
                    'gallery',
                    'event'
                ],
            },
            tech: 'js'
        },
        {block: 'link', mods: {
            action: [
                'scroll',
                'lightbox',
                'gallery',
                'event'
                ],
            },
            tech: 'bemhtml'
        }
    ]
}])
