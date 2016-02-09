
module.exports = function(bh) {

bh.match('link_action_lightbox', function(ctx, json) {
    ctx.applyBase();
    ctx.mix({
      block: 'lightbox',
      js: {
          url: ctx.param('url'),
          config: json.config || ''
      }
    }, true);

});
};
