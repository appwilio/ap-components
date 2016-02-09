<?php
return function ($bh) {
 $bh->match("widget_type_categories", function ($ctx, $json){
     if(empty($ctx->param('data'))){
         $ctx->param('title', null, true);
         return;
     }
     $ctx->applyBase()
         ->mod('colored', true)
         ->content([
             $ctx->content(),
             [
                 'block' => 'categories',
                 'mix' => ['block' => $json->block, 'elem' => 'body'],
                 'data' => $ctx->param('data')
             ]
         ], true);
 });
};
