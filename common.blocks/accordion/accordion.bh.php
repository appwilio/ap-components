<?php
return function($bh) {
    $bh->match('accordion', function($ctx){
        $ctx->js(true);
    });
};
