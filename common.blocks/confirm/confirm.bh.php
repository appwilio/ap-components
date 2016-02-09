<?php
return function ($bh) {
	$bh->match("confirm", function ($ctx, $json){
        $style = isset($json->mods->style)? $ctx->mod('style'): 'error';
        $ctx->tParam('style', $style);
		$ctx->js(true);
	});
};
