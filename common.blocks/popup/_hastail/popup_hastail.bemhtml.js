block('popup').mod('hastail')(
    content()(function () {
        return [
            { elem : 'tail' },
            { elem : 'content', content : applyNext() }
        ];
    })
);
