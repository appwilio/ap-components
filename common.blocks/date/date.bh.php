<?php
return function ($bh) {
 $bh->match("date", function ($ctx, $json){
     $ctx
         ->tag('time');
     if($ctx->param('unix_ts')){
         $date = new DateTime('@'.$json->unix_ts);
         $iso = $date->format(DateTime::ISO8601);
         $ctx->attr('datetime', $iso);
     }
 });
};
