<?php
return function($bh){
    $bh->match('attach__control', function($ctx){
        $attach = $ctx->tParam('_attach');
        $ctx->attr('multiple', (bool)$attach->mods->multiple);
    });
};
