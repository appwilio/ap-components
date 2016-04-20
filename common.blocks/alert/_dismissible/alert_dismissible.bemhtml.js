block('alert').mod('dismissible',true).content()(function() {
    return [
      {
        elem: 'dismiss'
      },
      this.ctx.content
  ];
});
