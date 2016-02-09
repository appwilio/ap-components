<?php
return function ($bh) {
    $bh->match("widget__title", function ($ctx, $json){
        $ctx->content([
            'block' => 'heading',
            'mods' => ['lvl' => 4, 'caps' => true ],
            'content' => $ctx->content()
        ], true);
    });
};
