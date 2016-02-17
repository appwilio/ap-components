var BEM_TEMPLATE_ENGINE = process.env.BEM_TEMPLATE_ENGINE || 'BH',
    PRODUCTION = process.env.YENV === 'production',
    fs = require('fs'),
    path = require('path'),
    techs = require('./techs'),
    PLATFORMS = {
        'desktop' : ['common'],
        // 'mobile' : ['common', 'touch'],
        // 'tablet' : ['common', 'touch'],
    },

    SETS = {
        'desktop' : ['common'],
        // 'touch' : ['common', 'touch']
    },
    BH_OPTIONS = {
        jsAttrName : 'data-bem',
        jsAttrScheme : 'json'
    };

module.exports = function (config) {

    var platforms = Object.keys(PLATFORMS),
        sets = Object.keys(SETS);

    // config.includeConfig('enb-bem-examples');
    // config.includeConfig('enb-bem-docs');
    config.includeConfig('enb-bem-specs');
    config.includeConfig('enb-bem-tmpl-specs');

    configureSets(sets, {
        // tests : config.module('enb-bem-examples').createConfigurator('tests'),
        // examples : config.module('enb-bem-examples').createConfigurator('examples'),
        // docs : config.module('enb-bem-docs').createConfigurator('docs', 'examples'),
        specs : config.module('enb-bem-specs').createConfigurator('specs'),
        tmplSpecs : config.module('enb-bem-tmpl-specs').createConfigurator('tmpl-specs')
    });

    function configureSets(platforms, sets) {
        platforms.forEach(function(platform) {
        /*    sets.examples.configure({
                destPath : platform + '.examples',
                levels : getLibLevels(platform),
                techSuffixes : ['examples'],
                fileSuffixes : ['bemjson.js', 'title.txt'],
                inlineBemjson : true,
                processInlineBemjson : wrapInPage
            });

            sets.tests.configure({
                destPath : platform + '.tests',
                levels : getLibLevels(platform),
                techSuffixes : ['tests'],
                fileSuffixes : ['bemjson.js', 'title.txt']
            });
            sets.docs.configure({
                destPath : platform + '.docs',
                levels : getLibLevels(platform),
                exampleSets : [platform + '.examples'],
                langs : config.getLanguages(),
                jsdoc : { suffixes : ['vanilla.js', 'browser.js', 'js'] }
            });
         */

            sets.specs.configure({
                destPath : platform + '.specs',
                levels : getLibLevels(platform),
                sourceLevels : getSpecLevels(platform),
                jsSuffixes : ['vanilla.js', 'browser.js', 'js'],
                templateEngine : {
                    templateTech : require('enb-bh/techs/bh-bundle'),
                    templateOptions : {
                        mimic : 'BEMHTML',
                        bhOptions : BH_OPTIONS
                    },
                    htmlTech : require('enb-bh/techs/bemjson-to-html'),
                    htmlTechOptionNames : { bemjsonFile : 'bemjsonFile', templateFile : 'bhFile' },
                },
            });

            sets.tmplSpecs.configure({
                destPath : platform + '.tmpl-specs',
                levels : getLibLevels(platform),
                sourceLevels : getSpecLevels(platform),
                engines : {
                    'BH.php' : {
                        tech : 'enb-bh-php/techs/bh-php-test',
                        async : true,
                        options : BH_OPTIONS
                    },
                    'BH.js' : {
                        tech : 'enb-bh/techs/bh-commonjs',
                        options : {
                            bhOptions : BH_OPTIONS
                        }
                    }
                },
                depsTech : techs.bem.depsOld
            });

            configureNodes(platform, [platform + '.tests/*/*', platform + '.examples/*/*']);
        });
    }

    function configureNodes(platform, nodes) {
        configureLevels(platform, nodes);

        config.nodes(nodes, function(nodeConfig) {

            // Base techs
            nodeConfig.addTechs([
                [techs.bem.bemjsonToBemdecl],
                [techs.bem.deps],
                [techs.bem.files]
            ]);

            // Client techs
            nodeConfig.addTechs([
                [techs.css.stylus, {
                    target : '?.css',
                    autoprefixer : { browsers : getBrowsers(platform) }
                }],
                [techs.js, {
                    filesTarget : '?.js.files',
                    includeYM : true
                }],
                [techs.files.merge, {
                    target : '?.js',
                    sources : ['?.browser.js', '?.browser.bh.js']
                }]
            ]);

            // js techs
            nodeConfig.addTechs([
                [techs.bem.depsByTechToBemdecl, {
                    target : '?.js-js.bemdecl.js',
                    sourceTech : 'js',
                    destTech : 'js'
                }],
                [techs.bem.mergeBemdecl, {
                    sources : ['?.bemdecl.js', '?.js-js.bemdecl.js'],
                    target : '?.js.bemdecl.js'
                }],
                [techs.bem.deps, {
                    target : '?.js.deps.js',
                    bemdeclFile : '?.js.bemdecl.js'
                }],
                [techs.bem.files, {
                    depsFile : '?.js.deps.js',
                    filesTarget : '?.js.files',
                    dirsTarget : '?.js.dirs'
                }]
            ]);

            // Client Template Engine
            nodeConfig.addTechs([
                [techs.bem.depsByTechToBemdecl, {
                    target : '?.template.bemdecl.js',
                    sourceTech : 'js',
                    destTech : 'bemhtml'
                }],
                [techs.bem.deps, {
                    target : '?.template.deps.js',
                    bemdeclFile : '?.template.bemdecl.js'
                }],
                [techs.bem.files, {
                    depsFile : '?.template.deps.js',
                    filesTarget : '?.template.files',
                    dirsTarget : '?.template.dirs'
                }],
                [techs.engines.bhBundle, {
                    target : '?.browser.bh.js',
                    filesTarget : '?.template.files',
                    mimic : 'BEMHTML',
                    bhOptions : BH_OPTIONS
                }]
            ]);

            // Server template engine
            nodeConfig.addTechs([
                [techs.engines.bhPhp, {
                    phpBootstrap : PRODUCTION? false : '../../vendor/bem/bh/index.php',
                    devMode : false,// !PRODUCTION,
                    jsAttrName : 'data-bem',
                    jsAttrScheme : 'json'
                }],
                [techs.html.bhPhp]
            ]);

            nodeConfig.addTargets([
                '?.bh.php', '_?.css', '_?.js'
            ]);
        });

        config.mode('development', function() {
            config.nodes(nodes, function(nodeConfig) {
                nodeConfig.addTechs([
                    [techs.borschik, { source : '?.css', target : '_?.css', freeze : true, minify : false }],
                    [techs.borschik, { source : '?.js', target : '_?.js', freeze : true, minify : false }]
                ]);
            });
        });

        config.mode('production', function() {
            config.nodes(nodes, function(nodeConfig) {
                nodeConfig.addTechs([
                    [techs.borschik, { source : '?.css', target : '_?.css', freeze : true, tech : 'cleancss', minify : true }],
                    [techs.borschik, { source : '?.js', target : '_?.js', freeze : true, minify : true }]
                ]);
            });
        });
    }

    /**
     * Получение уровней переопределения
     */
    function configureLevels(platform, nodes) {
        config.nodes(nodes, function(nodeConfig) {
            var nodeDir = nodeConfig.getNodePath(),
                blockSublevelDir = path.join(nodeDir, '..', '.blocks'),
                sublevelDir = path.join(nodeDir, 'blocks'),
                extendedLevels = [].concat(getSourceLevels(platform));

            if(fs.existsSync(blockSublevelDir)) {
                extendedLevels.push(blockSublevelDir);
            }

            if(fs.existsSync(sublevelDir)) {
                extendedLevels.push(sublevelDir);
            }

            nodeConfig.addTech([techs.bem.levels, { levels : extendedLevels }]);
        });
    }
};

function getLibLevels(platform) {
    return (PLATFORMS[platform] || SETS[platform]).map(function(level) {
        return level + '.blocks';
    });
}

function getSourceLevels(platform) {
    var platformNames = (PLATFORMS[platform] || SETS[platform]),
        levels = [];

    platformNames.forEach(function(name) {
        levels.push({ path : path.join('libs', 'bem-core', name + '.blocks'), check : false });
        levels.push({ path : path.join('libs', 'bem-core-php', name + '.blocks'), check : false });
        levels.push({ path : path.join('libs', 'bem-components', name + '.blocks'), check : false });
        levels.push({ path : path.join('libs', 'bem-components-php', name + '.blocks'), check : false });
        levels.push({ path : path.join('libs', 'bem-scrollspy', name + '.blocks'), check : false });
    });

    platformNames.forEach(function(name) {
        levels.push({ path : name + '.blocks', check : true });
    });

    return levels;
}

function getTestLevels(platform) {
    return [].concat(
        getSourceLevels(platform),
        'test.blocks'
    );
}

function getSpecLevels(platform) {
    return [].concat(
        { path : path.join('libs', 'bem-pr', 'spec.blocks'), check : false },
        getSourceLevels(platform)
    );
}
