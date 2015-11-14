<?php
return function ($bh) {
     $bh->match("modal__close", function ($ctx, $json){
         $ctx
             ->tag('i')
             ->mix(['block'=>'popup', 'elem' => 'close']);
     });
};
