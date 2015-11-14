<?php
return function ($bh) {
 $bh->match("image_size_thumbnail", function ($ctx, $json){
     $ctx->attrs([
         'width' =>  205,
         'height' => 138
     ]);
 });
};
