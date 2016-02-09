<?php

return function ($bh) {
    $bh->match('calendar__content', function ($ctx, $json) {
        $date = $ctx->param('date');
        $switchers = $ctx->param('switchers');
        $selected = $ctx->param('selected');

        $ctx->tParam('date', $date);
        $ctx->tParam('selected', isset($selected) ? $selected : true);

        $ctx->content([
            ['block' => 'calendar', 'elem' => 'switcher', 'mods' => ['dest' => 'prev'], 'content' => $switchers[0]],
            ['block' => 'calendar', 'elem' => 'title'],
            ['block' => 'calendar', 'elem' => 'switcher', 'mods' => ['dest' => 'next'], 'content' => $switchers[1]],
            ['block' => 'calendar', 'elem' => 'grid'],
        ], true);
    });
};
