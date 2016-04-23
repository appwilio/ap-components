block('link').mod('action', 'scroll')(
    mix()(function(){
        var mix = applyNext();
        mix.push({
            block : 'scrollto',
            mods : { target : 'anchor' }
        });
        return mix;
    })
);
