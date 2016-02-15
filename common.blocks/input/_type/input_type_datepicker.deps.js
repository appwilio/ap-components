([{
    shouldDeps : [
        {
            block : 'popup',
            mods : { theme : 'vr', target : 'anchor' }
        },
        {
            block : 'calendar',
            mods : { theme : 'vr' }
        }
    ]
},
{
    tech : 'js',
    shouldDeps : [
        { block : 'calendar', mods : { theme : 'vr' }, tech : 'bemhtml' }
    ]
}])
