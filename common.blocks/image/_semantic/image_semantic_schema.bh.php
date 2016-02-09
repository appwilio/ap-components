<?php
return function($bh){
    $bh->match('image_semantic_schema', function($ctx, $json){
        $ctx->attr('itemprop', 'contentUrl');
    });
};
