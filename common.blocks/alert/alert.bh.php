<?php
return function ($bh) {
     $bh->match("alert", function ($ctx, $json){
         $ctx
             ->js(true)
             ->attr('role', 'alert');
     });
};
