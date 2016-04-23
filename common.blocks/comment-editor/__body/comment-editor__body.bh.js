module.exports = function (bh) {
    bh.match('comment-editor__body', function (ctx){
        ctx.mix({ elem : 'control' });
        ctx.attrs({
            tabindex : 0,
            contenteditable : true,
            spellcheck : true,
            placeholder : ctx.param('placeholder')
        });
    });
};
