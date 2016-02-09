<?php

return function ($bh) {
    $bh->match('message', function ($ctx, $json) {
        $ctx->js(true);
    });
};
