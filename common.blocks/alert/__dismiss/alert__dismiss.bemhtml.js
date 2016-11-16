block('alert').elem('dismiss').replace()(function(){
    return {
        block : 'button',
        mix : { block : 'alert', elem : 'dismiss' },
        attrs : { 'aria-label' : 'Close' },
        icon : this.ctx.icon || { block : 'popup', elem : 'close' }
    };
});
