<?php
return function ($bh) {
 $bh->match("gpt", function ($ctx, $json){
     $id = isset($json->id)? $json->id : $ctx->generateId();
     $ctx->js(['slot' => $ctx->param('slot'), 'id' => $id]);
     $ctx->attr('id', $id);
 });
};
