<?php
return function ($bh) {
 $bh->match("widget_type_socials", function ($ctx, $json){
     $ctx
         ->applyBase()
         ->content([
             $ctx->content(),
             [
                 'block' => 'socials-widgets',
                'counters' => $json->data
             ]
         ], true);
 });
};
