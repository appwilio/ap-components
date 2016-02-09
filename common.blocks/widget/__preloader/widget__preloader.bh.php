<?php
return function ($bh) {
 $bh->match("widget__preloader", function ($ctx, $json){
     $ctx->content([
         [
             'block' => 'spin',
             'mods' => [
                 'size' => 'l',
                 'theme' => 'vr',
                 'visible' => true
             ]
         ]
     ]);
 });
};
