<?php
return function ($bh) {
 $bh->match("input__hint", function ($ctx, $json){
     $ctx
         ->tag('input')
         ->mix(['elem' => 'control'])
         ->attrs([
             'readonly' => true,
             'tabindex' => '-1',
             'type'     => 'text'
         ]);
 });
};
