<?php
return function ($bh) {
 $bh->match("image_size_w505", function ($ctx, $json){
     $ctx->attrs([
         'width' => '505',
         'height' => '280',
     ]);
 });
};
