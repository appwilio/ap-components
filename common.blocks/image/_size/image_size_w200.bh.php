<?php
return function ($bh) {
 $bh->match("image_size_w200", function ($ctx, $json){
     $ctx->attrs([
         'width' => '200',
         'height' => '130',
     ]);
 });
};
