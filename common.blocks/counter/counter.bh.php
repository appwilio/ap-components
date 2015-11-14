<?php

return function ($bh) {
    $bh->match('counter', function ($ctx, $json) {
        $icon = isset($json->icon) ? $json->icon : null;
        $ctx->js([
            'val' => $json->count? $json->count : 0,
            'action' => $json->action ? $json->action : false,
        ])
            ->mod('action', $ctx->param('action'))
            ->tag('span')
            ->content([
                'block' => 'button',
                'mods' => [
                    'theme' => 'vr',
                    'type' => 'counter',
                    'size' => $ctx->mod('size'),
                    'hovered' => $ctx->mod('toggled'),
                    'disabled' => $ctx->mod('disabled'),
                ],
                'url' => $json->url,
                'content' => [
                    [
                        'block' => 'icon',
                        'mods' => ['font' => true, 'type' => $icon],
                    ],
                    [
                        'elem' => 'text',
                        'mix' => [
                            'block' => 'counter',
                            'elem' => 'val'
                        ],
                        'content' => $json->count,
                    ]
                ]
            ]);
    });
};
