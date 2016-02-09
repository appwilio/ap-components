<?php

return function ($bh) {
    $bh->match('form-field_message_text', function ($ctx, $json) {
        $ctx->content([
            $ctx->content(),
            [
                'block' => 'message',
                'mods' => ['type' => 'text', 'theme' => $json->mods->theme, 'size' => $json->mods->size],
                'mix' => ['block' => $json->block, 'elem' => 'message'],
            ],
        ], true);
    });
};
