<?php

return function ($bh) {
 $bh->match('avatar__social', function ($ctx, $json) {
     $ctx->content([
         'block' => 'link',
         'url' => $json->url,
         'content' => [
             [
                 'block' => 'icon',
                 'mods' => ['font' => true, 'type' => $json->icon],
             ],
         ],

     ]);
 });
};
