<?php
return function ($bh) {
     $bh->match("date_pub", function ($ctx, $json){
         $ctx->attr('pubdate', true);
     });
};
