<?php
return function ($bh) {
    $bh->match("select_suggest_single__button", function ($ctx, $json){
        $mods = $json->blockMods ?: $json->mods;
        $select = $ctx->tParam('select');
        $checkedOptions = $ctx->tParam('checkedOptions');

        return [
            'block' => 'control-group',
            'content' => [
                [
                    'block' => $json->block,
                    'elem' => 'input'
                ],
                [
                    'block' => 'button',
                    'mix' => [ 'block' => $json->block, 'elem' => $json->elem ],
                    'mods' => [
                        'size' => $mods->size,
                        'theme' => $mods->theme,
                        'view' => $mods->view,
                        'disabled' => $mods->disabled,
                        'checked' => $mods->mode !== 'radio' && count($checkedOptions)
                    ],
                    'content' => [
                        [ 'block' => 'icon', 'mix' => [ 'block' => 'select', 'elem' => 'tick' ] ]
                    ]
                ]
            ],//control-group
        ];
    });
};
