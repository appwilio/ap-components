<?php

return function ($bh) {
    $bh->match('avatar__link', function ($ctx, $json) {
        $ctx->tag('a');
    });
};
