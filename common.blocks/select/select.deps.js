({
    tech : 'tmpl-spec.js',
    shouldDeps : [
        { block : 'select' },
        {
            block : 'select',
            mods : {
                suggest : ['single', 'multiple'],
                mode : ['check', 'radio-check', 'radio']
            }
        }
    ]
})
