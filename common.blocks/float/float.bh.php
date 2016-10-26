<?php
return function ($bh) {
     $bh->match('float', function ($ctx, $json){
        $ctx
            ->js(true)
            ->content([
                elem => 'content',
                content => $json->content
            ], true);
     });
};


