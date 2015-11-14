<?php
return function ($bh) {
 $bh->match("collapse__switcher", function ($ctx, $json){
     $ctx->content([
         'block' => 'icon',
         'mods' => ['font' => true, 'type' => 'angle-down'],
         'mix' => ['block' => 'collapse', 'elem' => 'tick']
     ]);
 });
};
