([{
    mustDeps : [
        { block : 'i-bem', elem : 'dom' },
        { block : 'control' }
    ],
    shouldDeps : [
        {
            elems : [
                'body',
                'control',
                'tools',
                'clear'
            ]
        }
    ]
},
{
    tech : 'spec.js',
    mustDeps : [
        {
            block : 'comment-editor',
            tech : 'bemhtml'
        }
    ],
    shouldDeps : [
        {
            elems : [
                'body',
                'control',
                'tools',
                'clear'
            ],
            tech : 'bemhtml'
        }
    ]
}])
