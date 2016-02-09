([
{
    mustDeps : [
    	{ block : 'i-bem', elem : 'dom' },
    	{ block : 'vow' },
    ]
},
{
	tech : 'tmpl-spec.js',
    mustDeps : [
    	{
            block : 'confirm',
            mods : {
                proof : 'word',
                type : 'modal'
            }
        }
    ]
},
{
	tech : 'spec.js',
    mustDeps : [
    	{ block : 'confirm', tech : 'bemhtml' }
    ]
},
])
