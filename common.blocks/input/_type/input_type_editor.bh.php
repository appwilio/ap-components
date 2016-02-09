<?php
return function ($bh) {
 $bh->match("input_type_editor", function ($ctx, $json){
     $ctx->applyBase();
     $ctx->content([
        'block' => 'redactor',
        'mods' => ['has-mm' => true],
        'mix' => ['block' => 'input', 'elem' => 'control'],
        'content' => $ctx->param('val')
     ], true);
 });
};
