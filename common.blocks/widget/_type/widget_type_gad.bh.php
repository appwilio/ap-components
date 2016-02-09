<?php
return function ($bh) {
 $bh->match("widget_type_gad", function ($ctx, $json){
     $ctx->applyBase();
     $ctx->content([
         $ctx->content(),
         [
             'block' => 'gpt',
             'slot' => $json->data['slot']
         ]
     ], true);
 });

