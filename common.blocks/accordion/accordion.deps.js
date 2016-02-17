([
    {
        mustDeps : [{ block : 'i-bem', elem : 'dom' }],
        shouldDeps : ['collapse']
    },
    {
        tech : 'spec.js',
        shouldDeps : [
            {
                block : 'accordion',
                tech : 'bemhtml'
            },
            {
                block : 'collapse',
                tech : 'bemhtml'
            }
        ]
    }
])
