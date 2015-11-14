<?php

return function ($bh) {
 $bh->match('image_lazy_scroll', function ($ctx, $json) {
     $ctx->mix(['block' => 'scrollspy', 'js' => ['offset' => '-30']]);
 });
};
