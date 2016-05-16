block('image').mod('wrap', true).replace()(
    function () {
        return applyCtx({
            elem : 'wrap',
            content : applyNext()
        });
    }
);
