/* global modules:false */

modules.define('attach-preview', ['jquery'], function(provide, $, Attach) {
Attach.decl({block: 'attach-preview', modName: 'type', modVal: 'image'}, {
    onSetMod: {
        'js': {
            'inited': function(){
                if (this.hasMod('uploaded'))
                    this._onPreviewLoad();
            }
        },
    },

    _onFileAdd: function(){
          var reader = new FileReader();
          reader.onload = $.proxy(this._onFileLoad, this);
          reader.readAsDataURL(this._file);
    },

    _onFileLoad: function(e){
        this._preview = e.target.result;
        this._onPreviewLoad();
    },
});
provide(Attach);

});

