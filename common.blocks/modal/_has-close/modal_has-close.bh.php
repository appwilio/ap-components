<?php
return function ($bh) {
     $bh->match("modal_has-close", function ($ctx, $json){
         $ctx->tParam('insert', !$ctx->mod('has-header'));
     });

     $bh->match("modal_has-close__content", function ($ctx, $json){
         if(!$ctx->tParam('insert')){
             return;
         }
         $ctx->content([
             ['elem'=>'close'],
             $ctx->content()
         ], true);
     });
};
