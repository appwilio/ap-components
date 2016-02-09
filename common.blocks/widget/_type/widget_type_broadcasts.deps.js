([{
    mustDeps: [],
    shouldDeps: [
        { block : 'posts-api' },
        { elem : 'preloader' },
        { block : 'tabs', mods : { theme : 'blue' } }
    ]
},{
    tech : 'js',
    shouldDeps : [
        {
            block : 'posts',
            mods : {view : 'list', size : 's'},
            tech : 'bemhtml'
        }
    ]
}])
