module.exports = function (bh) {
    bh.match('comment-editor__control', function (ctx){
        return {
            tag : 'input',
            mix : { block : 'comment-editor', elem : 'control' },
            attrs : {
                'type' : 'hidden',
                'name' : ctx.tParam('name'),
                'value' : ctx.tParam('val'),
                'id' : ctx.generateId()
            }
        };
    });
};
