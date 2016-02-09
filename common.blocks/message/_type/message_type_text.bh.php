<?php

return function ($bh) {
    $bh->match('message_type_text', function ($ctx, $json) {
        $ctx->mix(
            ['elem' => 'control']
        );
    });
};
