<?php

return function ($bh) {
    $bh->match('calendar', function ($ctx, $json) {
        $switcher = $ctx->param('switcher');
        $date = $ctx->param('date');
        $switchers = ($switcher) ? $switcher : ['пред.', 'след.'];
        $dt = new DateTime();
        $date = isset($date) ? $dt->setTimestamp($date) : $dt;
        $ctx->tParam('theme', $ctx->mod('theme'));
        $ctx->tParam('size', $ctx->mod('size'));

        $ctx->js([
            'date' => $dt->getTimestamp()*1000,
            'switchers' => $switchers,
        ]);
        $ctx->content([
            'block' => 'calendar',
            'elem' => 'content',
            'date' => $date,
            'switchers' => $switchers,
        ], true);
    });
};
