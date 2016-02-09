<?php
return function ($bh) {
     $bh->match("attach-preview_editable__tools", function ($ctx, $json){
         $ctx->applyBase();
         $ctx->content([
             $ctx->content(),
            [
                'mix' => [
                    'block' => 'attach-preview',
                    'elem' => 'edit'
                ],
                'block' => 'button',
                'icon' => [
                    'block' => 'icon',
                    'mods' => [
                        'type' => 'edit',
                        'size' => 's',
                        'font' => true
                    ]
                ]
            ]
         ], true);
     });
};
