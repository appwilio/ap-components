<?php
return function ($bh) {
 $bh->match("image_size_w370", function ($ctx, $json){
     $ctx->attrs([
         'width' => '370',
         'height' => '300',
     ]);
 });
};
