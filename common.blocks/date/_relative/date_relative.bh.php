<?php
return function ($bh) {
 $bh->match("date_relative", function ($ctx, $json){
     $ctx->js(['unix' => $ctx->param('unix_ts')]);
 });
};
