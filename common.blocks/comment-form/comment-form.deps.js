([{
    mustDeps : [
        { block : 'i-bem', elem : 'dom' },
        {
            block : 'comment-editor',
        },
    ],
    shouldDeps : [
        'comments-api',
        'input',
        { block : 'events', elem : 'channels' },
        {
            elems : [
                'footer',
                'guest',
                'wrap',
                'send',
                'submit',
                'collapse',
                'body',
                'editor',
            ]
        },
        {
            block : 'comment-form',
            mods : {
                by : [
                    'guest',
                    'user'
                ],
                attachable : true,
                collapsed : true
            }
        },
        {
            block : 'form',
            mods : {
                'has-validation' : true
            }
        },
        {
            block : 'form-field',
            mods : {
                type : ['input', 'hidden'],
                'has-validation' : true,
                'required' : true,
                'message' : ['text']
            }
        },
        { block : 'functions', elem : 'timeout' }
    ]
},
{
    tech : 'spec.js',
    mustDeps : [
        {
            block : 'comment-form',
            tech : 'bemhtml'
        },
        {
            block : 'comment-editor',
            tech : 'bemhtml'
        },
        { block : 'input', mods : { type : 'text' } },
        {
            block : 'form',
            mods : {
                'has-validation' : true
            }
        },
        { block : 'message' },
        {
            block : 'form-field',
            mods : {
                type : ['input', 'hidden'],
                'has-validation' : true,
                'required' : true,
                'message' : ['text']
            },
            tech : 'bemhtml'
        },
    ],
},
{
    tech : 'js',
    shouldDeps : [
        {
            block : 'comment',
            elems : [
                'aside',
                'content'
            ],
            tech : 'bemhtml'
        },
        {
            block : 'form-field',
            mods : {
                type : [
                    'hidden',
                    'input'
                ]
            },
            tech : 'bemhtml'
        }
    ]
}]);
