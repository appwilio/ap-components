<?php

return function ($bh) {
 $bh->match('image__spin', function ($ctx, $json) {
   $ctx->content(
     [
       'block' => 'spin',
       'mods' => [
         'theme' => 'vr',
         'size' => 'm',
       ],
     ]
   );
 });
};
