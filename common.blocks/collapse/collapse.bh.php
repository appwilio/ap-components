<?php

return function ($bh) {
    $bh->match('collapse', function ($ctx, $json) {
        $ctx
            ->js(true)
            ->content([
                [
                    'elem' => 'content',
                    'content' => $json->content
                ],
            ], true);
    });
};
