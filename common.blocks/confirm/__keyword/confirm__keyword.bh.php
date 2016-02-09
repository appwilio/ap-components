<?php
return function ($bh) {
    $bh->match("confirm__keyword", function ($ctx, $json){
        $ctx->tag('span');
    });
};
