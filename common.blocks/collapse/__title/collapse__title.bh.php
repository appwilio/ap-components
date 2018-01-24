<?php

return function ($bh) {
    $bh->match('collapse__title', function ($ctx, $json) {
        $ctx->tag('span');
    });
};
