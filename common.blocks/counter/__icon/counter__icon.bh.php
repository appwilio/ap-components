<?php
return function ($bh) {
    $bh->match('counter__icon', function ($ctx, $json) {
        $ctx->tag('i');
    });
};

