module.exports = function(bh) {

bh.match('link_action_gallery', function(ctx, json) {
    ctx.applyBase();
    ctx.mix({
      block : 'gallery',
      js : {
          url : ctx.param('url'),
          config : json.config || ''
      }
    }, true);

});
};

