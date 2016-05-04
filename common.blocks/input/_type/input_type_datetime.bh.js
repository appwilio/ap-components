module.exports = function (bh) {
 bh.match('input_type_datetime', function (ctx){
     var date = ctx.param('date'),
         hours = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23),
         mins  = [];

     for(var i = 0; i < 60; i++) {
         mins.push(i);
     }

     date = date? new Date(date * 1000) : new Date();
     ctx.applyBase();
     ctx.js({ date : date });
     ctx.content([
                {
                    'block' : 'input',
                    'mods' : {
                        'type' : 'datepicker',
                        'theme' : ctx.mod('theme'),
                        'size' : ctx.mod('size'),
                        'disabled' : ctx.mod('disabled')
                    },
                    'date'  : date.getTime() / 1000
                },
                {
                    'block' : 'select',
                    'mix' : { block : 'input', 'elem' : 'hours' },
                    'name' : 'hours',
                    'mods' : {
                        'mode' : 'radio',
                        'theme' : ctx.mod('theme'),
                        'size' : ctx.mod('size'),
                        'disabled' : ctx.mod('disabled')
                    },
                    'optionsMaxHeight' : 100,
                    'val' : date.getHours(),
                    'options' : hours.map(function(hour){
                        return { val : hour, text : hour };
                    })
                }, // hours
                '&nbsp;:&nbsp;',
                {
                    'block' : 'select',
                    'name' : 'mins',
                    'mix' : { block : 'input', elem : 'mins' },
                    'mods' : {
                        'mode' : 'radio',
                        'theme' : ctx.mod('theme'),
                        'size' : ctx.mod('size'),
                        'disabled' : ctx.mod('disabled')
                    },
                    'optionsMaxHeight' : 100,
                    'val' : date.getMinutes(),
                    'options' : mins.map(function(hour){
                        hour = hour < 10? '0' + hour : hour;
                        return { val : hour, 'text' : hour };
                    })
                } // mins
     ], true);
 });
};
