<?php

return function ($bh) {
    $bh->match('input__control', function ($ctx) {
        $_input = $ctx->tParam('_input');
        $_form_field = $ctx->tParam('_form_field');
        if ($_form_field) {
            $_input->id = isset($_input->id) ? $_input->id : $_form_field->id;
            $_input->name = isset($_input->name) ? $_input->name : $_form_field->name;
        }
    });
};
