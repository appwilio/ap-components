<?php
return function ($bh) {
 $bh->match("popup__close", function ($ctx, $json){
     $ctx->tag('i');
 });
};
