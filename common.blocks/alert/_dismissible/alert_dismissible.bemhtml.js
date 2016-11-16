block('alert').mod('dismissible', true).content()(function() {
    return [
        applyNext(),
        { elem : 'dismiss' }
  ];
});
