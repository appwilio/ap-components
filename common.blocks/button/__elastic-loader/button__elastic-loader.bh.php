<?php
return function ($bh) {
 $bh->match("button__elastic-loader", function ($ctx, $json){
     $ctx
         ->tag('svg')
         ->attrs([
         'width' => 0,
         'height' => 0
     ]);
 });
};
