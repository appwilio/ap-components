module.exports = function (bh) {
   bh.match([
        'avatar_size_w41',
        'avatar_size_w60',
        'avatar_size_w150',
        'avatar_size_w256',
     ], function (ctx, json){

         if(json.image) {
             var path = json.image.split('/'),
                 file = path.pop();
             path.push(ctx.mod('size'), file);

             ctx.param('image', path.join('/'), true);
         }
 });
};
