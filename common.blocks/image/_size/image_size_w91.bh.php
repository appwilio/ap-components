<?php
return function ($bh) {
 $bh->match("image_size_w91", function ($ctx, $json){
     $ctx->attrs([
         'width' => '91',
         'height' => '91',
     ]);
 });
};
