<?php
return function ($bh) {
 $bh->match("textarea_height_auto", function ($ctx, $json){
     $ctx->attr('rows', 1);
 });
};
