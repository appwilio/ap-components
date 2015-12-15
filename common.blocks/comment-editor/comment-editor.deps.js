([{
    mustDeps: [
        {block: 'i-bem', elem: 'dom'},
        {block: 'control'}
    ],
    shouldDeps: [
        {
            elems: [
                'body',
                'control',
                'tools'
            ]
        }
    ]
},
{
    tech: 'spec.js',
    mustDeps: [
        {
            block: 'comment-editor',
            tech: 'bemhtml'
        }
    ]
}])
