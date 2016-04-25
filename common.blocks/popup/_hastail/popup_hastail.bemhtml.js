block('popup').mod('hastail', true)(
    content()(function () {
        return [
            { elem : 'tail' },
            { elem : 'content', content : applyNext() }
        ];
    })
);
