<?php
return function ($bh) {
 $bh->match("widget_type_broadcasts", function ($ctx, $json){
     $ctx->applyBase();
     $ctx->js(true);
     $defOpts = [
         'size' => 's',
         'theme' => $ctx->mod('theme'),
         'view' => 'list'
     ];
     $opts = isset($json->options)? $json->options : [];
     $opts = $ctx->extend($defOpts, $opts);

     $ctx->mods([
         'size' => $opts['size'],
         'theme' => $opts['theme'],
         'first' => $ctx->isFirst()
     ]);

     $ctx->content([
         $ctx->content(),
         [
             'block' => 'tabs',
             'mix' => [
                 'block' => $json->block,
                 'elem' => 'tabs'
             ],
             'mods' => [ 'theme' => 'blue' ],
             'tabs' => [
                 [
                     'title' => 'Новые',
                     'checked' => true,
                     'content' => [
                         'block' => 'posts',
                         'mods' => [
                             'size' => $opts['size'],
                             'view' => $opts['view']
                         ],
                         'data' => $ctx->param('data')
                     ]
                 ],
                 [
                     'title' => 'Топ сегодня',
                     'content' => [
                         'block' => $json->block,
                         'elem' => 'preloader'
                     ]
                 ],
                 [
                     'title' => 'Топ недели',
                     'content' => [
                         'block' => $json->block,
                         'elem' => 'preloader'
                     ]
                 ],
             ], //tabs content
         ]
     ], true);
 });
};
