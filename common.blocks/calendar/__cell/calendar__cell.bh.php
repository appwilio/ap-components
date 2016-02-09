<?php

return function ($bh) {
    $bh->match('calendar__cell', function ($ctx, $json) {
        $ctx->tag('td');
        $ctx->js([
            'date' => $ctx->param('date'),
        ]);
    });
};
