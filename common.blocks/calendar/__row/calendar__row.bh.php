<?php

return function ($bh) {
    $bh->match('calendar__row', function ($ctx, $json) {
        $ctx->tag('tr');
    });
};
