<?php
return function($bh) {
    $bh->match('attach-preview', function($ctx, $json) {
        $ctx
           ->tag('preview')
           ->mod('id', $json->id)
           ->attr('id', $json->id)
           ->js([
               'id'=> $json->id,
               'preview' => $ctx->param('preview'),
               'alt' => $ctx->param('alt'),
               'title' => $ctx->param('title'),
               'urls' => $ctx->param('urls')
           ])
           ->attr('style', 'background-image: url('.$ctx->param('preview').')')
           ->attr('draggable', 'true')
           ->mix([
               'block' => 'sortable',
               'elem'  => 'item'
           ])
           ->content([
                [
                    'elem' => 'tools',
                    'content' => [
                        [
                            'mix' => [
                                'block' => 'attach-preview',
                                'elem' => 'del'
                            ],
                            'block' => 'button',
                            'icon' => [
                                'block' => 'icon',
                                'mods' => [
                                    'type' => 'delete',
                                    'size' => 's',
                                    'font' => true
                                ]
                            ]
                        ]
                    ]
                ]
            ]);
    });
};
