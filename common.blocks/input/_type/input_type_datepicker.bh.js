module.exports = function (bh) {

    bh.match('input_type_datepicker', function (ctx) {
        var date = ctx.param('date')?
            new Date(ctx.param('date') * 1000) :
            new Date();

        function formatDate(date) {
            var day = date.getDate(),
                month = date.getMonth() + 1;
            return [day < 10? '0' + day : day,
                    month < 10? '0' + month : month,
                    date.getFullYear()
                    ].join('.');
        }

        ctx.applyBase();
        ctx.content([
            {
                'elem' : 'control',
                'attrs' : {
                    'readonly' : true,
                    'value' : formatDate(date)
                }
            },
            {
                'block' : 'popup',
                'mods' : { 'padding' : 'l', 'theme' : ctx.mod('theme'), 'target' : 'anchor', autoclosable : true },
                'content' : {
                    'block' : 'calendar',
                    'mods' : {
                        'theme' : ctx.mod('theme'),
                        'size' : ctx.mod('size')
                    },
                    'date' : date.getTime(),
                }
            }
        ], true);
    });
};
