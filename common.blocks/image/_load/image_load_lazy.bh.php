<?php

return function ($bh) {
    $bh->match('image_load_lazy', function ($ctx, $json) {

        if($ctx->mod('semantic')){
            $ctx->attrs([
                'itemprop' => false,
                'itemscope' => true,
                'itemtype' => 'http://schema.org/ImageObject'
            ], true);
        }

        $ctx
            ->tag('span')
            ->js(['url' => $json->url])
            ->attr('src', null, true)
            ->content([
                [
                    'elem' => 'container',
                    'tag' => 'span',
                    'content' => [
                        [
                            'block' => 'image',
                            'mix' => ['elem' => 'img'],
                            'url' => $json->preview,
                            'alt' => $json->alt,
                            'title' => $json->title,
                            'width' => $json->width,
                            'height' => $json->height,
                        ],
                        [
                            'elem' => 'spin',
                            'tag' => 'span'
                        ],
                    ],
                ],
                [
                    'elem' => 'fallback',
                    'content' => [
                        'block' => 'image',
                        'mods' => ['semantic' => $json->mods->semantic],
                        'url' => $json->url,
                        'alt' => $json->alt,
                    ]
                ]
            ]);
    });
};
