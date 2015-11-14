module.exports = function (bh) {

   bh.match("image_load_lazy", function (ctx, json) {
       ctx
         .js({url : json.url})
         .attr('src', 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAGXRFWHRDb21tZW50AENyZWF0ZWQgd2l0aCBHSU1QV4EOFwAAAA1JREFUCNdjYGBgYAAAAAUAAV7zKjoAAAAASUVORK5CYII=', true);
   });

};
