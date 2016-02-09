<?php
return function ($bh) {
 $bh->match("input_type_date", function ($ctx, $json){
     $ctx->applyBase();
     $day = ''; $month = ''; $year = '';
     $valSrc = $ctx->param('val');
     $vals = explode('.', $valSrc);
     if(!isset($vals[2])){
         $vals = [1, 1, 2000];
     }

     $day = (int)$vals[0];
     $month = (int)$vals[1];
     $year = (int)$vals[2];

     $months = [
         ['val' => 1, 'text' => 'Январь'],
         ['val' => 2, 'text' => 'Февраль'],
         ['val' => 3, 'text' => 'Март'],
         ['val' => 4, 'text' => 'Апрель'],
         ['val' => 5, 'text' => 'Май'],
         ['val' => 6, 'text' => 'Июнь'],
         ['val' => 7, 'text' => 'Июль'],
         ['val' => 8, 'text' => 'Август'],
         ['val' => 9, 'text' => 'Сентябрь'],
         ['val' => 10, 'text' => 'Октябрь'],
         ['val' => 11, 'text' => 'Ноябрь'],
         ['val' => 12, 'text' => 'Декабрь'],
     ];

     $ctx->js(['date' => $valSrc]);
     $ctx->content([
         [
             'block' => 'input',
             'mods' => [
                 'type' => 'number',
                 'theme' => $ctx->mod('theme'),
                 'size' => $ctx->mod('size')
             ],
             'js' => ['min' => 1, 'max' => 31],
             'name' => $ctx->param('name').'[day]',
             'mix' => ['elem' => 'day'],
             'val' => $day
         ],
         [
             'block' => 'select',
             'mods' => [
                 'mode' => 'radio',
                 'theme' => $ctx->mod('theme'),
                 'size' => $ctx->mod('size')
             ],
             'mix' => ['block' => $json->block, 'elem' => 'month'],
             'name' => $ctx->param('name').'[month]',
             'val' => $month,
             'options' => $months
         ],
         [
             'block' => 'input',
             'mix' => ['elem' => 'year'],
             'mods' => [
                 'type' => 'number',
                 'theme' => $ctx->mod('theme'),
                 'size' => $ctx->mod('size')
             ],
             'name' => $ctx->param('name').'[year]',
             'js' => ['min' => 1920],
             'val' => $year
         ],
     ], true);
 });
};
