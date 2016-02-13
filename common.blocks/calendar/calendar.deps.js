([{
    mustDeps : [
    ],
    shouldDeps : [
        {
            block : 'functions',
            elem : 'date', },
        {
            block : 'calendar',
            elems : ['content', 'title', 'grid', 'row', 'cell', 'switcher']
        }
    ]
}, {
    tech : 'js',
    mustDeps : [
        { block : 'i-bem', tech : 'bemhtml' },
        {
            block : 'calendar',
            tech : 'bemhtml'
        },
        {
            block : 'calendar',
            elems : ['content', 'title', 'grid', 'row', 'cell', 'switcher'],
            tech : 'bemhtml'
        }
    ]
}])
