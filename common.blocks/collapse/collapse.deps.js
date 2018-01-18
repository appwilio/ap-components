([{
    mustDeps : [
        { block : 'i-bem-dom' }
    ],
    shouldDeps : [
        { elems : ['switcher', 'container', 'tick', 'title'] },
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
