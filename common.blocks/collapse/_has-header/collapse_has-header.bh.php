<?php

return function ($bh) {
    $bh->match('collapse_has-header', function ($ctx, $json) {
        $ctx->applyBase();
        $ctx
            ->content([
                [
                    'elem' => 'header',
                    'mix' => ['elem' => 'switcher'],
                    'content' => [
                        $json->preview,
                        [
                            'elem' => 'switcher'
                        ],
                    ],
                ],
                $ctx->content()
            ], true);
    });
};
