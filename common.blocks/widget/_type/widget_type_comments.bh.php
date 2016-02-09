<?php
return function ($bh) {
 $bh->match("widget_type_comments", function ($ctx, $json){
     $ctx
         ->applyBase()
         ->content([
             $ctx->content(),
             array_map(function($comment){
                 return [
                    'elem' => 'comment',
                    'profile_url' => isset($comment['profile_url']) ? $comment['profile_url'] : null,
                    'full_name' => isset($comment['full_name']) ? $comment['full_name'] : null,
                    'username' => isset($comment['username']) ? $comment['username'] : null,
                    'avatar_url' => isset($comment['avatar_url']) ? $comment['avatar_url'] : null,
                    'post_url' => isset($comment['post_url']) ? $comment['post_url'] : null,
                    'title' => isset($comment['title']) ? $comment['title'] : null,
                    'body' => isset($comment['body']) ? $comment['body'] : null,
                 ];
             }, $json->data)
         ], true);
 });

 $bh->match("widget_type_comments__comment", function ($ctx, $json){
    $ctx->content([
        [
            'elem' => 'header',
            'content' => [
                [
                    'block' => 'avatar',
                    'mods' => ['size' => 'w41'],
                    'url' => $json->profile_url,
                    'img' => $json->avatar_url,
                ],
                [
                    'block' => 'link',
                    'mods' => ['theme' => 'vr', 'size' => 'l'],
                    'url' => $json->profile_url,
                    'content' => isset($json->full_name) ? $json->full_name : $json->username
                ]
            ]
        ],
        [
            'elem' => 'wrap',
            'content' => [

                [
                    'elem' => 'body',
                    'content' => $json->body,
                ],
                [
                    'elem' => 'info',
                    'content' => [
                        'к записи: ',
                        [
                            'block' => 'link',
                            'mods' => ['theme' => 'vr', 'size' => 'l'],
                            'url' => $json->post_url,
                            'content' => $json->title,
                        ],
                    ],
                ],
            ],
        ],
    ]);
 });
};
