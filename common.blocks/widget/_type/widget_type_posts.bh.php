<?php
return function ($bh) {
 $bh->match("widget_type_posts", function ($ctx, $json){
     $ctx->applyBase();
     $defOpts = [
         'size' => 'm',
         'theme' => 'vr',
         'view' => 'grid',
         'lazy' => 'scroll',
         'features' => [
             //'excerpt' => true,
             //'stats' => true,
             'author' => true,
             //'date' => true
         ],
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
             'block' => 'posts',
             'mods' => [
                 'size' => $opts['size'],
                 'view' => $opts['view'],
                 'lazy' => $opts['lazy']
             ],
             'features' => $opts['features'],
             'data' => $ctx->param('data')
         ]
     ], true);
 });
};
