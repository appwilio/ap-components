<?php
return function ($bh) {
     $bh->match("scrollto", function ($ctx, $json){
         $ctx->js([
             'offset' => $ctx->param('offset'),
             'speed' => $ctx->param('speed'),
         ]);
     });
};
