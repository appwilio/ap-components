<?php
return function ($bh) {
 $bh->match("select__menu", function ($ctx, $json){ //вообще то тут должен быть select_nested но он не матчился.
        $ctx->applyBase();
        $select = $ctx->tParam('select');
        $mods = $select->mods;
        $optionToMenuItem = function ($option) use ($mods) {
            $res = [
                'block' => 'menu-item',
                'mods' => [ 'disabled' => $mods->disabled ?: @$option['disabled'] ],
                'val' => @$option['val'],
                'js' => [ 'checkedText' => @$option['checkedText'] ],
                'content' => @$option['text']
            ];

            if (!empty($option['icon'])) {
                $res['js']['text'] = @$option['text'];
                $res['content'] = [
                    $option['icon'],
                    $res['content']
                ];
            }

            return $res;
        };

        return $select->options ? [
            'block' => 'menu',
            'mix' => [ 'block' => $json->block, 'elem' => $json->elem ],
            'mods' => [
                'size' => $mods->size,
                'theme' => $mods->theme,
                'disabled' => $mods->disabled,
                'mode' => $mods->mode,
                'nested' => $mods->nested
            ],
            'val' => $select->val,
            'attrs' => [ 'tabindex' => null ],
            'content' => array_map(function ($optionOrGroup) use ($select, $optionToMenuItem) {
                return isset($optionOrGroup['group'])?
                    [
                        'elem' => 'group',
                        'title' => @$optionOrGroup['title'],
                        'option' => isset($optionOrGroup['option'])?  $optionToMenuItem($optionOrGroup['option']) : false,
                        'content' => array_map($optionToMenuItem, $optionOrGroup['group'])
                    ] :
                    $optionToMenuItem($optionOrGroup);
            }, $select->options)
        ] : null;
 });
};
