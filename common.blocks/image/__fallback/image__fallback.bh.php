<?php

return function ($bh) {
 $bh->match('image__fallback', function ($ctx, $json) {
   $ctx->tag('noscript');
 });
};
