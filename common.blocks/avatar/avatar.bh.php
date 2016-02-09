<?php
return function ($bh) {
    $bh->match('avatar', function ($ctx, $json) {
        $ctx->mod('default', !isset($json->image)? $ctx->mod('default'): false, true);
        $ctx->content([
            [
                'elem' => 'link',
                'attrs' => ['href' => $json->url],
                'content' =>
                    [
                        'elem' => 'image',
                        'url' => $ctx->param('image'),
                    ]
            ],
        ]);
    });
};
