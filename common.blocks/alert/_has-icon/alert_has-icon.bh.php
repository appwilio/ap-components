<?php
return function ($bh) {
 $bh->match("alert_has-icon", function ($ctx, $json){
     $ctx->applyBase();

     switch ($ctx->mod('status')) {
         case 'error' :
             $status = 'info-2';
         break;
         case 'success' :
             $status = 'check';
         break;
         default :
             $status = 'info';
     }

     $ctx->content([
         [
             'elem' => 'aside',
             'content' => [
                 isset($json->icon)?
                 $json->icon:
                 [
                     'block' => 'icon',
                     'mods' => [
                         'font' => true,
                         'type' => $status
                     ]
                 ]
             ]
         ],
         [
             'elem' => 'content',
             'content' => $ctx->content()
         ]
     ], true);
 });
};
