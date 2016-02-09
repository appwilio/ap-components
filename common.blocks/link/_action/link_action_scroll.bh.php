<?php
return function ($bh) {
     $bh->match("link_action_scroll", function ($ctx, $json){
         $ctx->mix([
             'block' => 'scrollto',
             'mods' => [
                 'target' => 'anchor'
             ]
         ]);
     });
};
