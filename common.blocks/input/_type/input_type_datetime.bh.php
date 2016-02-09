<?php
return function ($bh) {
 $bh->match("input_type_datetime", function ($ctx, $json){
     $date = $ctx->param('date');
     $dt = new DateTime();
     $date = isset($date) ? $dt->setTimestamp($date) : $dt;
     $ctx->applyBase();
     $ctx->js(['date' => $date->format('Y-m-d')]);
     $ctx->content([
         [
             'block' => 'control-group',
             'content' => [
                [
                    'block' => 'input',
                    'mods' => [
                        'type' => 'datepicker',
                        'theme' => $ctx->mod('theme'),
                        'size' => $ctx->mod('size'),
                        'disabled' => $ctx->mod('disabled')
                    ],
                    'date'  => $date->getTimestamp()
                ],
                [
                    'block' => 'select',
                    'mix' => ['block' => 'input', 'elem' => 'hours'],
                    'name' => 'hours',
                    'mods' => [
                        'mode' => 'radio',
                        'theme' => $ctx->mod('theme'),
                        'size' => $ctx->mod('size'),
                        'disabled' => $ctx->mod('disabled')
                    ],
                    'optionsMaxHeight' => 100,
                    'val' => $date->format('H'),
                    'options' => array_map(function($hour){
                        return ['val' => $hour, 'text' => $hour];
                    }, range(0, 23))
                ], //hours
                '&nbsp;:&nbsp;',
                [
                    'block' => 'select',
                    'name' => 'mins',
                    'mix' => ['block' => 'input', 'elem' => 'mins'],
                    'mods' => [
                        'mode' => 'radio',
                        'theme' => $ctx->mod('theme'),
                        'size' => $ctx->mod('size'),
                        'disabled' => $ctx->mod('disabled')
                    ],
                    'optionsMaxHeight' => 100,
                    'val' => $date->format('i'),
                    'options' => array_map(function($hour){
                        $hour = $hour < 10? "0$hour" : $hour;
                        return ['val' => $hour, 'text' => $hour];
                    }, range(0, 59))
                ], //hours
             ]
         ],
     ], true);
 });
};
