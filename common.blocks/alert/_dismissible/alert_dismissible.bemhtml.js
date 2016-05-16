block('alert').mod('dismissible', true).content()(function() {
    return [
        {
            block : 'button',
            mix : { block : 'alert', elem : 'dismiss' },
            attrs : { 'aria-label' : 'Close' },
            icon : { block : 'popup', elem : 'close' }
        },
      applyNext()
  ];
});
