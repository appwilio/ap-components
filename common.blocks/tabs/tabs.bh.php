<?php

return function ($bh) {
    $bh->match('tabs', function ($ctx, $json) {
        $hasSelected = false;
        $boxContainer = [];
        $radioGroup = [
            'block' => 'radio-group',
            'mix' => ['block' => 'tabs', 'elem' => 'tabs-group'],
            'mods' => $json->mods,
            'name' => $json->name || 'tabs',
            'options' => [],
        ];
        if ($json->tabs) {
            $i = 0;
            foreach ($json->tabs as $tab) {
                $tabContent[] = [
                    'elem' => 'box',
                    'js' => ['id' => $i],
                    'content' => $tab['content'],
                ];

                $radioGroup['options'][] = [
                    'val' => $i,
                    'text' => $tab['title'],
                    'mix' => ['block' => 'tabs', 'elem' => 'tab'],
                ];

                if (!$hasSelected && $tab['checked'] === true) {
                    $radioGroup['options'][$i]['checked'] = true;
                    $radioGroup['val'] = $i;
                    $hasSelected = true;
                    $tabContent[$i]['mods'] = ['selected' => true];
                }

                $boxContainer = $tabContent;

                $i++;
            }
        }
        if (!$hasSelected) {
            $radioGroup['options'][0]['checked'] = true;
            $boxContainer[0]['mods'] = ['selected' => true];
        }
        $ctx->js(true)
            ->content([$radioGroup, ['elem' => 'container', 'content' => $boxContainer]]);
    });

};
