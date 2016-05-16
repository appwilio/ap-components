block('attach').elem('control')(
    attrs()(function() {
        var attrs = applyNext();
        attrs.multiple = !!this._attach.mods.multiple;
        return attrs;
    })
);
