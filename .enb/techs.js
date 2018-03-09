module.exports = {
    files : {
        provide : require('enb/techs/file-provider'),
        copy : require('enb/techs/file-copy'),
        merge : require('enb/techs/file-merge')
    },
    bem : require('enb-bem-techs'),
    css : {
        stylus : require('enb-stylus/techs/stylus')
    },
    js : require('enb-js/techs/browser-js'),
    engines : {
        bhCommonJS : require('enb-bh/techs/bh-commonjs'),
        bhBundle : require('enb-bh/techs/bh-bundle'),
    },
    html : {
        bh : require('enb-bh/techs/bemjson-to-html'),
        bemhtml : require('enb-bemxjst/techs/bemhtml')
    },
    borschik : require('enb-borschik/techs/borschik')
};
