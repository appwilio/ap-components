<?php
return function ($bh) {
     $bh->match("modal_has-close__content", function ($ctx, $json){
         $ctx->content([
             ['elem'=>'close'],
             $ctx->content()
         ], true);
     });
};
