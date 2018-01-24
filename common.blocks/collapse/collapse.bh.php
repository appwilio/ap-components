<?php

return function ($bh) {
    $bh->match('collapse', function ($ctx, $json) {
        $isOpened = (bool) $json->mods->opened;
        $ctx
            ->js(true)
            ->content([
                [
                    'elem' => 'header',
                    'mix' => [
                        'elem' => 'switcher',
                        'mods' => [ 'opened' => $isOpened ]
                    ],
                    'content' => [
                        [
                            'elem' => 'title',
                            'content' => $ctx->param('preview')
                        ],
                        [
                            'elem' => 'tick',
                            'mods' => [
                                'elem' => 'switcher',
                                'mods' => [ 'opened' => $isOpened ]
                            ]
                        ]
                    ]
                ],
                [
                    'elem' => 'content',
                    'mods' => [ 'visible' => $isOpened ],
                    'content' => $json->content
                ],
            ], true);
    });
};
