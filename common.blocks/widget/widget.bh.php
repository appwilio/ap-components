<?php
return function ($bh) {
    $bh->match("widget", function ($ctx, $json){
        if (isset($json->title) and !empty($json->title)) {
            $ctx->content(['elem' => 'title', 'content' => $json->title], true);
            $ctx->mod('has-title', true);
        }
    });
};
