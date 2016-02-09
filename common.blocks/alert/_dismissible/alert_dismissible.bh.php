<?php
return function ($bh) {
 $bh->match("alert_dismissible", function ($ctx, $json){
     $ctx->content([
         [
             'elem' => 'dismiss',
         ],
         $ctx->content()
     ],true);
 });
};
