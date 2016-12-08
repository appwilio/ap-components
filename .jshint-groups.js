module.exports = {
    options : {
        boss : true,
        eqeqeq : true,
        evil : true,
        expr : true,
        forin : true,
        immed : true,
        loopfunc : true,
        maxdepth : 4,
        maxlen : 120,
        noarg : true,
        noempty : true,
        onecase : true,
        quotmark : 'single',
        sub : true,
        supernew : true,
        undef : true,
        unused : true
    },

    groups : {
        browserjs : {
            options : {
                browser : true,
                predef : ['modules']
            },
            includes : ['*.blocks/**/*.js'],
            excludes : [
                '**/*.i18n/*.js',
                '**/*.bem/*.js',
                '**/_*.js',
                '**/*.bh.js',
                '**/*.spec.js',
                '**/*.deps.js',
                '**/*.bemjson.js',
                '**/*.bemhtml.js',
                'common.blocks/fancybox/**',
                'common.blocks/jslib/**'
            ]
        },

        specjs : {
            options : {
                browser : true,
                maxlen : 150,
                predef : [
                    'modules',
                    'describe',
                    'it',
                    'before',
                    'beforeEach',
                    'after',
                    'afterEach'
                ]
            },
            includes : ['*.blocks/**/*.spec.js']
        },

        bemhtml : {
            options : {
                maxlen : 250,
                predef : [
                    'apply',
                    'applyCtx',
                    'applyNext',
                    'attrs',
                    'bem',
                    'block',
                    'cls',
                    'content',
                    'def',
                    'elem',
                    'js',
                    'local',
                    'match',
                    'mix',
                    'mod',
                    'mode',
                    'tag'
                ]
            },
            includes : ['*.blocks/**/*.bemhtml.js', '*.blocks/**/*.bemhtml']
        },

        bhjs : {
            options : {
                node : true,
                maxlen : 250
            },
            includes : [
                '*.blocks/**/*.bh.js',
                'design/*.blocks/**/*.bh.js'
            ]
        },

        bemjsonjs : {
            options : {
                asi : true
            },
            includes : ['*.pages/**/*.bemjson.js']
        }
    }
};
