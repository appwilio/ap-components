<?php
return function($bh) {

    $bh->match('list', function($ctx, $json) {
        $ctx->tag('ul');
        $items = isset($json->items)? $json->items : [];

        $ctx->content(array_map(function($item) {
            return [
                'elem' => 'item',
                'tag'  => 'li',
                'content' => $item
            ];
        }, $items));
    });

};
