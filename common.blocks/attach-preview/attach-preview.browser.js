/* global modules:false */

modules.define('attach-preview',
               ['i-bem__dom', 'objects', 'jquery', 'api', 'BEMHTML'],
               function(provide, BEMDOM, Objects, $, Api, BEMHTML) {

BEMDOM.decl('attach-preview', {
    onSetMod : {
        'js' : {
            'inited' : function(){
                this.domElem.draggable = true;

                this._id = this.params.id || this._uniqId;
                this._preview = this.params.preview;
                this.attributes = {
                    alt: this.params.alt,
                    title: this.params.title
                };
                this._urls = this.params.urls;
                this._file = null;
                this._apiurl = this.params.apiurl; //url to manipulate file
                this.updateOrder();
            }
        },

        'uploaded': function(){
            this.delMod('upload');
            this._file = null;
        },

        'upload' : {
            '*' : function(mod, val){
                val !== 'error' && BEMDOM.destruct(this.findElem('retry'));
            },
            'error' : function(){
                BEMDOM.append(
                    this.domElem,
                    BEMHTML.apply({block: 'attach-preview', elem: 'retry', mods : {size: this.getMod('size')}})
                );
            },
        },

        'id': {
            '*': function(){
                this.domElem.attr('id', this._id);
            }
        }
    },

    /**
     * updates preview order
     * @returns {Number} new order
     */
    updateOrder: function(){
        this.order = this.domElem.index();
        return this.order;
    },

    /**
     * Sets preview order
     * @param {Number} order File order
     * @returns {Number} new file order
     */
    setOrder: function(order){
        if (!isNaN(order))
            this.order = order;

        return this.order;
    },

    /**
     * sets Url to manipulate file
     */
    setApiUrl: function(url){
        this._apiurl = url;
    },

    /**
     * Returns preview identifier
     * @returns {String} ID
     */
    getId: function(){
        return this._id;
    },

    setId: function(id){
        this._id = id;
        this.setMod('id', this._id);
    },

    /**
     * Returns preview attribures
     * @returns {Object} attributes
     */
    getAttrs: function(){
        return this.attributes;
    },

    setAttrs : function(vals){
        Objects.extend(this.attributes, vals);
        return this;
    },

    /**
     * Update the file meta on server
     */
    update: function(){
        Api.update(this._apiurl+'/'+this._id, this.serialize()[this._id]);
    },

    /**
     * Serialize attach metadata
     * @param {Boolean} json stringify data
     * @returns {String|Object} serialized data
     */
    serialize: function(json){
        var params = Objects.extend({}, this.attributes),
            obj = {};
        params.order = this.order;
        params.uniq_id = this.getId();
        var identifier = this.getFile().name || this.getId();
        obj[identifier] = params;
        return json? JSON.stringify(obj): obj;
    },

    /**
     * Exports review to source-like object
     * @returns {Object} Preview source
     */
    export: function(){
        var obj = {
            block: 'attach-preview',
            id: this.getId(),
            preview: this.getUrl(),
            urls: this._urls,
            alt: this.attributes.alt,
            title: this.attributes.title
        };
        return obj;
    },


    /**
     * Returns associated file object to upload,
     * if file not uploaded yet.
     * @returns {Object|Boolean} native file object
     */
    getFile: function() {
        return this._file? this._file : false;
    },

    setFile: function(fileObj){
        this._file = fileObj;
        this._onFileAdd();
    },

    /**
     * upload File to url
     * @param {String} url to upload
     */
    upload: function(url){
        if(this.hasMod('uploaded') || this.hasMod('upload', 'progress'))
            return;

        this.setMod('upload', 'progress');

        url = url || this._apiurl;
        var data = new FormData();
        data.append('files[]', this.getFile());
        data.append('attributes', JSON.stringify([this.serialize()]));

        Api.create(url, data)
            .then( function(res){
                if(res.message){this.emit('echo', res.message);}
                var image = res.payload.images[0];
                this.onUploaded(image);
            }, this)
            .catch(function(err){
                this.setMod('upload', 'error');
                console.error(err);
            }, this);
    },

    onUploaded: function(image){
        if(image){
            this.setPreviewParams(image);
            this.setMod('uploaded', true);
        } else {
            console.warn('Image uploaded, but no image object found');
        }
    },

    /**
     * Update preview params
     * @param {Object} image uploaded image object
     */
    setPreviewParams: function(image){
        try {
            if(image.urls){this.setUrls(image.urls);}
            if(image.url){this.setUrl(image.url);}
            this.setId(image.id);
            this.attributes.alt = image.alt;
            this.attributes.title = image.title;
        } catch (e){
            console.warn('Image uploaded, but we have some errors');
            console.warn(e);
            console.log(image);
        }
    },


    /**
     * remove file from server and delete preview
     */
    remove : function(){
        var cf = BEMDOM.append(this.domElem, this.__self._getConfirm());
        confirm = this.findBlockOn(cf, 'confirm');
        confirm.getPromise()
         .then(
             function(){
                this.emit('remove');
                if(this.hasMod('uploaded')){
                    Api.delete(this._apiurl+'/'+this._id).then(
                        this._onRemoved,
                        null,
                        this
                    );
                } else {
                    this._onRemoved();
                }
             },
             this
         );
    },

    /**
     * triggers onFile removed
     */
    _onRemoved: function(){
        this.emit('delete', { id : this._id });
        BEMDOM.destruct(this.domElem);
    },

    _onFileAdd: function(){
          var reader = new FileReader();
          reader.onload = $.proxy(this._onFileLoad, this);
          reader.readAsDataURL(this._file);
    },

    /**
     * on base64 preview ready
     */
    _onFileLoad: function(e){
        this.setUrl(e.target.result);
    },

    /**
     * returns image preview
     * @param {String} size Image Size (mini, thumbnail, full)
     */
    getUrl: function(size){
        if (size === undefined)
            size = 'full';

        if(this.hasMod('uploaded') && this._urls !== undefined) {
            return this._urls[size] || this._preview;
        }
        return this._preview;
    },

    /**
     * Returns al available sizes
     * @deprecated
     * @returns {Array} sizes
     */
    getSizes: function(){
        var sizes = [];
        for(var s in this._urls) {
            sizes.push(s);
        }
        return sizes;
    },

    /**
     * sets new preview url
     * @param {String} url preview url
     */
    setUrl: function(url){
        this._preview = url;
        this._onPreviewLoad();
    },

    /**
     * sets new preview url
     * @param {Object} urls preview urls
     */
    setUrls: function(urls){
        this._urls = urls;
    },

    _onPreviewLoad : function() {
        this.domElem.css('background-image', 'url(' + this._preview + ')');
        this.setMod('preview', 'loaded');
    },

    /**
     * @callback
     */
    _onPointerClick: function(e){
        this.hasMod('disabled') || this.emit('click');
    },

    /**
     * @callback
     */
    _onDblClick : function(e){
        this.hasMod('disabled') || this.emit('dblclick');
    },

}, {
    _getConfirm : function(){
        return BEMHTML.apply({
            block : 'confirm',
            mods : {
                type : 'modal',
                size : 'm',
                theme : 'vr',
            },
            header : 'Удалить изображение',
        });
    },

    live : function(){
        this
            .liveBindTo('pointerclick', this.prototype._onPointerClick)
            .liveBindTo('dblclick', this.prototype._onDblClick)
            .liveBindTo('retry', 'click', this.prototype.upload)
            .liveBindTo('pointerover', function(){
                this.setMod('hovered', true);
            })
            .liveBindTo('pointerout', function(){
                this.setMod('hovered', false);
            })
            .liveBindTo('del', 'click', function(){
                this.remove();
            });
        return false;
    }
});

provide(BEMDOM);

});

