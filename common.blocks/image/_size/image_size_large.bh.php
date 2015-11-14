<?php
return function ($bh) {
 $bh->match("image_size_large", function ($ctx, $json){
     $ctx->attrs([
         'width' =>  610,
         'height' => 350
     ]);
 });
};
