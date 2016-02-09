<?php

return function ($bh) {
    $bh->match('calendar__title', function ($ctx, $json) {
        $date = $ctx->tParam('date');
        $year = $date->format('Y');
        setlocale(LC_ALL, 'ru_RU.UTF-8'); //FIXME use system locale
        $title = strftime('%B', strtotime($date->format('Y-m-d'))) . ' ' .$year;
        $ctx->content($title, true);
    });
};
