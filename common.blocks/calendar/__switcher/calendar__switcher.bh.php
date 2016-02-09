<?php
return function ($bh) {
 $bh->match("calendar__switcher", function ($ctx, $json){
     $ctx->mix([
         'block' => 'button'
     ]);
 });
};
