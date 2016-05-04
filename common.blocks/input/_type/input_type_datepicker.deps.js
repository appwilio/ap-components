([{
    mustDeps : [],
    shouldDeps : [
        {
            block : 'popup',
            mods : { target : 'anchor', autoclosable : true }
        },
        'calendar'
    ]
},
{
    tech : 'js',
    shouldDeps : [
        { block : 'calendar', tech : 'bemhtml' }
    ]
},
{
    tech : 'spec.js',
    shouldDeps : [
        { block : 'calendar' },
        { block : 'calendar', tech : 'bemhtml' },
        { block : 'popup', mods : { target : 'anchor' }, tech : 'bemhtml' }
    ]
}
]);
