<?php
return function ($bh) {
 $bh->match("input__spin", function ($ctx, $json){
     $ctx->content([
         'block' => 'spin',
         'mods' => [
             'theme' => 'islands',
             'size' => 'm',
         ]
     ]);
 });
};
