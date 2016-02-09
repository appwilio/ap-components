<?php
return function ($bh) {
 $bh->match("popup_hastail", function ($ctx, $json){
     $ctx->applyBase();
     $ctx->content([
         ['elem' => 'tail'],
         ['elem' => 'content', 'content' => $ctx->content()]
     ], true);
 });
};
