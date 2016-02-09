<?php
return function ($bh) {
     $bh->match("input_type_typehead", function ($ctx, $json){
         $ctx->mod('has-spin', true);
         $ctx->applyBase();
         $ctx->content([
             $ctx->content(),
             [
                 'block' => 'popup',
                 'mods' => [
                     'target' => 'anchor',
                     'autoclosable' => true,
                     'theme' => $ctx->mod('theme'),
                     'width' => 'available'
                 ],
                 //'mainOffset' => '4',
                 'directions' => ['bottom-left'],
                 'content' => [
                     'block' => 'menu',
                     'mods' => [
                         'theme' => $ctx->mod('theme'),
                         'size'  => $ctx->mod('size'),
                     ],
                     'mix' => [
                         'block' => 'input',
                         'elem' => 'menu',
                     ],
                 ]
             ]
         ], true);
     });

     $bh->match("input_type_typehead__box", function ($ctx, $json){
         $ctx->content([
             $ctx->content(),
             [
                 'elem' => 'hint',
             ],
         ], true);
     });
};
