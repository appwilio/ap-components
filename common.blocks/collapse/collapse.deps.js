([{
    mustDeps : [
        { block : 'i-bem', elem : 'dom' }
    ],
    shouldDeps : [
        { elems : ['switcher', 'container'] },
    ]
},
{
    tech: 'tmpl-spec.js',
    shouldDeps: [
        {
            mods : { 'has-header' : true }
        }
    ]
},
{
    tech: 'spec.js',
    mustDeps: [
        {
            block: 'collapse',
            tech: 'bemhtml'
        }
    ]
}])
