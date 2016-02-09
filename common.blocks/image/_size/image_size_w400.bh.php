<?php
return function ($bh) {
 $bh->match("image_size_w400", function ($ctx, $json){
     $ctx->attrs([
         'width' => '400',
         'height' => '200',
     ]);
 });
};
