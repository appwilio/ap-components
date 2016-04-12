<?php

return function ($bh) {
    $bh->match('form-field', function ($ctx, $json) {
        $ctx->js(true);
        $form_field = $ctx->json();
        $form_field->id = $form_field->id? $form_field->id: $ctx->generateId();
        $form_field->mods->name = $form_field->name;
        $ctx->attr('data-name', $form_field->name);
        $ctx->tParam('_form_field', $form_field);
    });
};
