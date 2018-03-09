module.exports = {
    root : true,

    levels : [
        {
            path : 'common.blocks',
            layer : 'common',
            check : true
        },
        {
            path : 'node_modules/bem-core/common.blocks',
            layer : 'core',
            check : false
        },
        {
            path : 'node_modules/bem-core/desktop.blocks',
            layer : 'core-desktop',
            check : false
        },
        {
            path : 'node_modules/bem-components/common.blocks',
            layer : 'components',
            check : false
        },
        {
            path : 'node_modules/bem-core/desktop.blocks',
            layer : 'components-desktop',
            check : false
        },
        {
            path : 'node_modules/bem-scrollspy/common.blocks',
            layer : 'scrollspy',
            check : false
        },
        {
            path : 'node_modules/bem-forms/common.blocks',
            layer : 'forms',
            check : false
        },
        {
            path : 'node_modules/bem-pr/spec.blocks',
            layer : 'bempr',
            check : false
        }
    ],

    sets : {
        'common' : 'common',
        'desktop' : 'common',
        'spec' : 'bempr core components components-desktop scrollspy forms common'
    },

    modules : {
        'bem-tools' : {
            plugins : {
                create : {
                    techs : ['js', 'deps.js'],
                    levels : {
                        'common.blocks' : {
                            default : true
                        }
                    }
                }
            }
        }
    }
};
