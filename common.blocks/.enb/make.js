var BEM_TEMPLATE_ENGINE = process.env.BEM_TEMPLATE_ENGINE || 'BH',
    PRODUCTION = process.env.YENV === 'production',
    fs = require('fs'),
    path = require('path'),
    techs = require('./techs'),
    PLATFORMS = {
        'desktop' : ['common'],
        //'mobile' : ['common', 'touch'],
        //'tablet' : ['common', 'touch'],
    },

    SETS = {
        'desktop' : ['common', 'desktop'],
        'touch' : ['common', 'touch']
    },
    BH_OPTIONS = {
        jsAttrName: "data-bem",
        jsAttrScheme: "json"
    };

module.exports = function (config) {

    var platforms = Object.keys(PLATFORMS),
        sets = Object.keys(SETS);

    configureSets(sets); //Сборка бандлов


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

    //platformNames.forEach(function(name) {
        //levels.push({ path : path.join('design', name + '.blocks'), check : true });
    //});

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
