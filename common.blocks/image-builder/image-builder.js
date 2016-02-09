modules.define('image-builder', ['image__config'], function(provide, cfg){
    provide({
        getResizedUrl : function(url, sizeId){
            var path = url.split('/'),
                image = path.pop();
            path.push(sizeId, image);

            return path.join('/');
        },

        /**
         * Воззвращает доступные размеры для указанного типа картинки
         */
        getSizes : function(scope){
            return cfg[scope];
        },
    });
});
