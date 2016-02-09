<?php
return function ($bh) {
     $bh->match("input_has-spin__box", function ($ctx, $json){
         $ctx->content([
             $ctx->content(),
             [
                 'elem' => 'spin'
             ]
         ], true);

     });
};
