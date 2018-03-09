var BEM_TEMPLATE_ENGINE = process.env.BEM_TEMPLATE_ENGINE || 'BH',
    PRODUCTION = process.env.YENV === 'production',
    fs = require('fs'),
    path = require('path'),
    techs = require('./techs'),
    bemConfig  = require('@bem/sdk.config')(),
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

    config.includeConfig('enb-bem-specs');
    config.includeConfig('enb-bem-tmpl-specs');

    configureSets(sets, {
        specs : config.module('enb-bem-specs').createConfigurator('specs'),
        tmplSpecs : config.module('enb-bem-tmpl-specs').createConfigurator('tmpl-specs')
    });

    function configureSets(platforms, sets) {
        platforms.forEach(function(platform) {
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
                    htmlTechOptionNames : { bemjsonFile : 'bemjsonFile', templateFile : 'bhFile' }
                }
            });

            sets.tmplSpecs.configure({
                destPath : platform + '.tmpl-specs',
                levels : getLibLevels(platform),
                sourceLevels : getSpecLevels(platform),
                engines : {
                    'BH.js' : {
                        tech : 'enb-bh/techs/bh-commonjs',
                        options : {
                            bhOptions : BH_OPTIONS
                        }
                    },
                    'bemhtml' : {
                        tech : 'enb-bemxjst/techs/bemhtml',
                        options : {
                            sourceSuffixes : ['bemhtml.js', 'bemhtml'],
                            exportName : 'BEMHTML',
                            devMode : true
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

            nodeConfig.addTargets([
                '_?.css', '_?.js'
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
    return bemConfig.levelsSync('common');
}

function getSourceLevels(platform) {
    return bemConfig.levelsSync(platform);
}

function getSpecLevels() {
    return bemConfig.levelsSync('spec');
}
