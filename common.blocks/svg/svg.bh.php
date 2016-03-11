<?php
return function($bh) {
    $bh->match('svg', function($ctx) {
        $ctx
            ->tag('svg')
            ->attr('role', 'img')
            ->attr('version', '1.1')
            ->attr('xmlns', 'http://www.w3.org/2000/svg');
    });
};
