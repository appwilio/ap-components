<?php
return function ($bh) {
 $bh->match("comment-editor", function ($ctx, $json){
     $ctx->tParam('val', $ctx->content());
     $ctx->content([
         [
             'elem' => 'control'
         ],
         [
             'elem' => 'body',
             'placeholder' => $ctx->param('placeholder'),
             'content' => $ctx->content()
         ],
         [
             'elem' => 'tools',
             'content' => [
                 [
                     'block' => 'input',
                     'elem' => 'clear',
                     'mix' => [
                         'block' => $json->block,
                         'elem' => 'clear',
                     ]
                 ]
             ]
         ]
     ], true);
 });
};
