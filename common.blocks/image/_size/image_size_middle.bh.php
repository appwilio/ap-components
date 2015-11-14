<?php
return function ($bh) {
 $bh->match("image_size_middle", function ($ctx, $json){
     $ctx->attrs([
         'width' =>  410,
         'height' => 290
     ]);
 });
};
