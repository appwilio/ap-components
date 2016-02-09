<?php

return function ($bh) {
    $bh->match('form-field_required', function ($ctx, $json) {
        $ctx->mix(['mods' => ['has-validation' => true]]);
    });
};
