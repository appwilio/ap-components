block('attach').elem('control')(
    attrs()(function() {
        var attrs = applyNext();
        if(this._attach) attrs.multiple = !!this._attach.mods.multiple;
        return attrs;
    })
);
