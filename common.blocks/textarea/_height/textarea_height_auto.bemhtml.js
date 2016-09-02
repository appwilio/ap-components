block('textarea').mod('height', 'auto').attrs()(function(){
    var attrs = applyNext();
    attrs.rows = 1;
    return attrs;
});
