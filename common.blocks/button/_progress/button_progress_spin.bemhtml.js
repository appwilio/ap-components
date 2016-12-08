block('button').mod('progress', 'spin')(
    content()(function(){
        return [
            {
                elem : 'elastic-loader',
                tag : 'svg',
                attrs : { viewBox : '0 0 80 80' },
                content : {
                    elem : 'loader-path',
                    tag : 'path',
                    attrs : {
                        d : 'M40 68c-15.4 0-28-12.6-28-28s12.6-28 28-28 28 12.6 28 28h4c0-17.6-14.4-32-32-32s-32 14.4-32 32 14.4 32 32 32v-4z'
                    }
                }
            },
            applyNext()
        ];
    })
);
