<?php
return function ($bh) {
    $bh->match("widget-area", function ($ctx, $json){
        $name = $ctx->param('name');
        $allWidgets = isset($json->widgets)? $json->widgets : $ctx->tParam('widgets');
        if(!array_key_exists($name, $allWidgets)) {
            return;
        }

        $widgets = $allWidgets[$name];
        return array_map(function($widget) use ($ctx) {
            return $ctx->extend([ 'block' => 'widget', 'mods' => [ 'type' => $widget['type'] ] ], $widget);
        }, $widgets);
    });
};
