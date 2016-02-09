<?php
return function ($bh) {
   $bh->match([
        'avatar_size_w41',
        'avatar_size_w60',
        'avatar_size_w150',
        'avatar_size_w256',
     ], function ($ctx, $json){

         if(isset($json->image)){
             $path = explode('/', $json->image);
             $file = array_pop($path);
             array_push($path, $ctx->mod('size'), $file);

             $ctx->param('image', implode('/', $path), true);
         }
 });
};
