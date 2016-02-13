module.exports = function (bh) {
    bh.match('comment-editor__body', function (ctx){
        ctx.mix({ elem : 'control' });
        ctx.attrs({
            'contenteditable' : true,
            'spellcheck' : true,
            placeholder : ctx.param('placeholder')
        });
    });
};
