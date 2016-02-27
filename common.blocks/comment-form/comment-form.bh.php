<?php

return function ($bh) {
    $bh->match('comment-form', function ($ctx, $json) {
        $ctx
            ->tag('form')
            ->attr('action', '/post/'.$ctx->param('post').'/comments/add')
            ->attr('method', 'post')
            ->mix([
                [
                    'block' => 'form',
                    'js' => true,
                    'mods' => [
                        'has-validation' => true,
                    ],
                ],
                [
                    'block' => 'row',
                ],
                ['block' => 'comment'],
            ])
            ->mod('collapsed', true)
            ->mod('attachable', $ctx->param('attachable'))
            ->mod('by', $json->author ? 'user' : 'guest')
            ->mod('answer', $json->parent_id ? true : false)
            ->js([
                'parent' => $ctx->param('parent_id'),
                'post' => $ctx->param('post'),
            ])
            ->content([
                [
                    'block' => 'comment',
                    'elem' => 'aside',
                    'content' => [
                        [
                            'block' => 'avatar',
                            'mods' => [ 'size' => 'w60'],
                            'image' => isset($json->author['avatar_url']) ?
                            $json->author['avatar_url'] : null,
                        ],
                    ],
                ],
                [
                    'elem' => 'content',
                    'block' => 'comment',
                    'content' => [
                        [
                            'block' => 'form-field',
                            'name' => 'body',
                            'mods' => [
                                'type' => 'comment-editor',
                                'required' => true,
                                'has-validation' => true,
                                'message' => 'text',
                            ],
                            'js' => [
                                'required' => [
                                    'message' => 'Обязательно к заполнению',
                                ],
                            ],
                            'mix' => [
                                'block' => 'comment-form',
                                'elem' => 'body'
                            ],
                            'content' => [
                                [
                                    'block' => 'comment-editor',
                                    'mods' => ['theme' => 'vr'],
                                    'mix' => ['block' => $json->block, 'elem' => 'editor'],
                                    'placeholder' => 'Ваш комментарий'
                                ],
                            ],
                        ],
                        [
                            'block' => 'comment-form',
                            'elem' => 'wrap',
                            'content' => [
                                [
                                    'block' => 'form-field',
                                    'name' => 'parent',
                                    'val' => $ctx->param('parent_id'),
                                    'id' => $ctx->generateId(),
                                    'mods' => [
                                        'type' => 'hidden',
                                    ],
                                ],
                                [
                                    'block' => 'comment-form',
                                    'elem' => 'collapse',
                                    'content' => [
                                        $ctx->mod('by') === 'guest' ?
                                        [
                                            'block' => 'comment-form',
                                            'elem' => 'guest',
                                        ] : null,
                                        $ctx->param('attachable') ?
                                        [
                                            'block' => 'comment-form',
                                            'elem' => 'attach',
                                        ] : null,
                                        [
                                            'block' => 'comment-form',
                                            'elem' => 'send',
                                            'content' => [
                                                [
                                                    'block' => 'button',
                                                    'mix' => [
                                                        [
                                                            'block' => 'comment-form',
                                                            'elem' => 'submit',
                                                        ],
                                                    ],
                                                    'mods' => [
                                                        'theme' => 'vr',
                                                        'size' => 'l',
                                                        'type' => 'submit',
                                                        'width' => 'available',
                                                        'disabled' => true
                                                    ],
                                                    'text' => 'Опубликовать',
                                                ],
                                            ],
                                        ],
                                    ],
                                ],

                            ],
                        ],
                        $ctx->mod('by') === 'guest' ?
                        [
                            'block' => 'comment-form',
                            'elem' => 'footer',
                        ] : null,
                    ],
                ],
            ]);
    });
};
