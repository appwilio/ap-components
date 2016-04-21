block('date')(
  tag()('time'),
  attrs().match(function() { return this.ctx.unix_ts; })(
    function () {
      var date = new Date(this.ctx.unix_ts * 1000),
          iso = date.toISOString(),
          attrs = { datetime : iso };
          return attrs;
    }
  )
);
