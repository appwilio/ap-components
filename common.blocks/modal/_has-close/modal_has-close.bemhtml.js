block('modal').mod('has-close')(
    match(function() { return !this.mods['has-header']; })(
        elem('content')(
            content()(function() {
                return [
                    { elem : 'close' },
                    applyNext()
                ];
            })
        )
    )
);
