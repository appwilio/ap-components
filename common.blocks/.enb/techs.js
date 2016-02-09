module.exports = {
    files : {
        provide : require('enb/techs/file-provider'),
        copy : require('enb/techs/file-copy'),
        merge : require('enb/techs/file-merge')
    },
    bem : require('enb-bem-techs'),
    css : {
        stylus : require('enb-stylus/techs/stylus'),
    },
    js : require('enb-js/techs/browser-js'),
    engines : {
        bhCommonJS : require('enb-bh/techs/bh-commonjs'),
        bhBundle : require('enb-bh/techs/bh-bundle'),
        bhPhp : require('enb-bh-php').bhPhp,
    },
    html : {
        bh : require('enb-bh/techs/bemjson-to-html'),
        bhPhp : require('enb-bh-php').bemjsonToHtml,
    },
    borschik : require('enb-borschik/techs/borschik')
};
