<?php

return function ($bh) {
    $bh->match('textarea', function ($ctx, $json) {
        $_form_field = $ctx->tParam('_form_field');

        if ($_form_field) {
            $json->id = isset($json->id) ? $json->id : $_form_field->id;
            $json->name = isset($json->name) ? $json->name : $_form_field->name;
        }
    });
};
