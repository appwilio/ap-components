module.exports = function (bh) {
    bh.match('confirm_proof_word', function (ctx, json){
        ctx.js({
            'word' : json.word,
        });

        ctx.content([
            {
                'block' : json.block,
                'elem' : 'text',
                'content' : ctx.param('text')
            },
            {
                'block' : 'input',
                'mix' : {
                    'block' : json.block,
                    'elem' : 'input'
                },
                'autocomplete' : false,
                'placeholder' : 'Введите текст',
                'mods' : {
                    'focused' : true,
                    'theme' : json.mods.theme,
                    'size' : 'l',
                    'type' : 'text',
                    'width' : 'available'
                }
            }
        ]);
    });
};
