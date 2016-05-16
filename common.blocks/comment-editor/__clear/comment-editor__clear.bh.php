<?php
return function ($bh) {
    $bh->match('comment-editor__clear', function(){
        return [ 'block' => 'input', 'elem' => 'clear', 'mix' => [ 'block' => 'comment-editor', 'elem' => 'clear' ] ];
    });
};
