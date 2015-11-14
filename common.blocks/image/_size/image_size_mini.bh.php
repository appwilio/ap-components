<?php
return function ($bh) {
 $bh->match("image_size_mini", function ($ctx, $json){
     $ctx->attrs([
         'width' =>  120,
         'height' => 120
     ]);
 });
};
