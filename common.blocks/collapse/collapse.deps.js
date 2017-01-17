([{
    mustDeps : [
        { block : 'i-bem', elem : 'dom' }
    ],
    shouldDeps : [
        { elems : ['switcher', 'container'] },
    ]
},
{
    tech : 'tmpl-spec.js',
    shouldDeps : [
        { elem : 'tick' }
    ]
},
{
    tech : 'spec.js',
    mustDeps : [
        {
            block : 'collapse',
            tech : 'bemhtml'
        }
    ]
}])
