({
    mustDeps : [
        { block : 'i-bem', elem : 'dom' }
    ],
    shouldDeps : [
        {
            elems : [
                'keyword'
            ]
        },
        { block : 'validation', mods : { equal : true } },
        {
            block : 'button',
            mods : {
                disabled : true,
                view : ['error', 'warning'],
            }
        },
        {
            block : 'input',
            mods : {
                type : 'text',
                width : 'available',
                size : ['m', 'l'],
            }
        }
    ]
})
