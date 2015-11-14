<?php

return function ($bh) {
    $bh->match('image_load_lazy', function ($ctx, $json) {
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
                            'alt' => $json->alt,
                            'title' => $json->title,
                            'width' => $json->width,
                            'height' => $json->height,
                            'attr' => ['src' => 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAGXRFWHRDb21tZW50AENyZWF0ZWQgd2l0aCBHSU1QV4EOFwAAAA1JREFUCNdjYGBgYAAAAAUAAV7zKjoAAAAASUVORK5CYII='],
                        ],
                        [
                            'elem' => 'spin',
                            'tag' => 'span'
                        ],
                    ],
                ],
//                [
//                    'elem' => 'fallback',
//                    'content' => [
//                        'block' => 'image',
//                        'url' => $json->url,
//                        'alt' => $json->alt,
//                    ]
//                ]
            ]);
    });
};
