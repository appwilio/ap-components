<?php
return function ($bh) {

     $bh->match("attach-preview_selectable", function ($ctx, $json){
             $ctx->tParam('checked', $ctx->mod('checked'));
     });
};
