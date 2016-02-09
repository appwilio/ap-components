/* global modules:false */

modules.define('attach-preview',
               ['i-bem__dom', 'objects', 'BEMHTML', 'api'],
               function(provide, BEMDOM, Objects, BEMHTML, Api, Preview) {

Preview.decl({block: 'attach-preview', modName: 'editable', modVal: true}, {
    onSetMod: {
        'js': {
            'inited': function(){
                this.__base.apply(this, arguments);
                this.on('change', this.update);
            }
        },
    },
    edit: function(){
        this._modal = BEMDOM.after(
            this.domElem,
            BEMHTML.apply(this._getModalBEMJSON())
        );
        this._modal = this.findBlockOn(this._modal, 'modal');
        this._modal.setMod('visible', true);
        this._modal.on({modName: 'visible', modVal: false}, this._updateFields, this);
    },

    _updateFields: function(){
        var attributes = this._modal.findBlockInside('media-editor').getVal();
        Objects.extend(this.attributes, attributes);
        this.emit('change');
    },


    _getFields: function(){
        var fields = [];
        for (var fname in this.attributes){
            fields.push({
                block: 'form-field',
                name: fname,
                mods: {
                    type: 'input'
                },
                content:[
                    {
                        block: 'label',
                        content: fname,
                    },
                    {
                       block: 'input',
                       mods: {
                           theme: 'vr',
                           type: 'text',
                           width: 'available',
                           size: 'l',
                       },
                       name: fname,
                       val: this.attributes[fname]
                    }
                ]
            });
        }
        return fields;
    },

    _getModalBEMJSON: function(){
        return {
            block: 'modal',
            mods: {
                theme: 'vr',
                autocloseable: true,
                'has-close': true,
            },
            content: [
            {
                block: 'media-editor',
                mix: [
                    {block: 'row'},
                ],
                content: [
                    {
                        elem: 'preview',
                        mix: {block: 'row', elem: 'col', mods: {sw: 12, mw: 4}},
                        content: [
                            {
                                block: 'image',
                                url: this.getUrl()
                            }
                        ]
                    },
                    {
                        elem: 'fields',
                        mix: {block: 'row', elem: 'col', mods: {sw: 12, mw: 8}},
                        content: [
                            this._getFields(),
                        ]
                    }
                ]
            }
            ]
        };
    },

}, {
    live: function(){
        this.liveBindTo('edit', 'click', function(){
            this.edit();
        });
        return this.__base.apply(this, arguments);
    }
});

provide(Preview);

});

