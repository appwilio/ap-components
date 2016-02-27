<?php
return function ($bh) {
     $bh->match("comment-form__guest", function ($ctx, $json){
         $ctx
             ->mix([
                 'block' => 'row',
             ])
             ->content([
                [
                    'block' => 'form-field',
                    'mix' => [
                        'block' => 'row',
                        'elem' => 'col',
                        'mods' => [
                            'mw' => 6
                        ]
                    ],
                    'id' => 'input',
                    'js' => [
                        'required' => [
                            'message' => 'Обязательно к заполнению',
                        ],
                    ],
                    'name' => 'username',
                    'mods' => [
                        'type' => 'input',
                        'has-validation' => true,
                        'required' => true,
                        'message' => 'text',
                    ],
                    'content' => [
                        [
                            'block' => 'input',
                            'mods' => [
                                'theme' => 'vr',
                                'size' => 'l',
                                'width' => 'available'
                            ],
                            'placeholder' => 'Ваше имя',
                            'name' => 'username',
                        ],
                    ],
                ],
                [
                    'block' => 'form-field',
                    'id' => 'input',
                    'mix' => [
                        'block' => 'row',
                        'elem' => 'col',
                        'mods' => [
                            'mw' => 6
                        ]
                    ],
                    'js' => [
                        'required' => [
                            'message' => 'Обязательно к заполнению',
                        ],
                    ],
                    'name' => 'email',
                    'mods' => [
                        'type' => 'input',
                        'has-validation' => true,
                        'required' => true,
                        'message' => 'text',
                        'validate' => 'email',
                    ],
                    'content' => [
                        [
                            'block' => 'input',
                            'mods' => [
                                'theme' => 'vr',
                                'size' => 'l',
                                'width' => 'available'
                            ],
                            'placeholder' => 'Ваш email',
                            'name' => 'email',
                        ],
                    ],
                ],
                [
                    'block' => 'form-field',
                    'name' => 'register',
                    'mods' => [
                        'type' => 'checkbox',
                    ],
                    'content' => [
                        'block' => 'checkbox',
                        'name' => 'register',
                        'val' => 1,
                        'text' => 'Я хочу зарегистрироваться',
                        'cheked' => true,
                        'mods' => [
                            'theme' => 'vr',
                            'size' => 'l'
                        ],
                        'mix' => [
                            [
                                'block' => 'row',
                                'elem' => 'col',
                                'mods' => ['sw' => 12]
                            ],
                            [
                                'block' => 'comment-form',
                                'elem' => 'register'
                            ]
                        ]
                    ]
                ]
             ]);
     });
};
