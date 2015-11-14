module.exports = function(bh) {

  bh.match('collapse_type_admin', function(ctx, json) {
    ctx
        .js(true)
        .content([
            { elem : 'container', content : json.content },
            {
                block : 'link',
                mods : { pseudo : true, theme : 'vr' },
                mix : { block : 'collapse', elem : 'switcher' },
                content : json.switcher || 'Show'
            }
        ], true);
  });
};
