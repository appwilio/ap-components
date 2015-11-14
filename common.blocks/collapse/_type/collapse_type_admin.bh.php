<?php

return function ($bh) {
    $bh->match('collapse_type_admin', function ($ctx, $json) {
        $ctx
            ->js(true)
            ->content([
                [
                    'elem' => 'preview', 'content' => [
                    $json->preview,
                    [
                        'block' => 'link',
                        'mods' => ['pseudo' => true, 'theme' => 'vr'],
                        'mix' => ['block' => 'collapse', 'elem' => 'switcher'],
                    ],
                ],
                ],
                ['elem' => 'container', 'content' => $json->content],
            ], true);
    });
};
