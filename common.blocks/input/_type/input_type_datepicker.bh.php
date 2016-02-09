<?php

return function ($bh) {

    $bh->match('input_type_datepicker', function ($ctx, $json) {
        $date = $ctx->param('date');
        $dt = new DateTime();
        $date = isset($date) ? $dt->setTimestamp($date) : $dt;
        $ctx->applyBase();
        $ctx->content([
            [
                'elem' => 'control',
                'attrs' => [
                    'readonly' => true,
                    'value' => $date->format('d.m.Y')
                ],
            ],
            [
                'block' => 'popup',
                'mods' => [ 'padding' => 'l', 'theme' => $ctx->mod('theme'), 'target' => 'anchor'],
                'content' => [
                    'block' => 'calendar',
                    'mods' => [
                        'theme' => $ctx->mod('theme'),
                        'size' => $ctx->mod('size')
                    ],
                    'date' => $dt->getTimestamp(),
                ]
            ]
        ], true);
    });
};
