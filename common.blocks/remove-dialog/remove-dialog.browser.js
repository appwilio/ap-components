modules.define('remove-dialog',
    ['i-bem-dom', 'BEMHTML', 'objects', 'confirm'],
    function(provide, bemDom, BEMHTML, Objects, Confirm) {

provide(bemDom.declMixin(this.name, {

    /**
     * call remove dialog
     * @param {Boolean} force don't ask confirm
     * @public
     */
    remove : function(force){
        if(force){
            return this._remove();
        }

        var removeConfirm = bemDom
            .after(this.domElem, BEMHTML.apply(this._getConfirmBemjson()))
            .bem(Confirm);

        removeConfirm.on('yes', function() {
            bemDom.destruct(removeConfirm.domElem);
            this._remove();
        }, this);

        removeConfirm.on('no', function() {
            bemDom.destruct(this.domElem); // destruct confirm
        });
    },

    _getConfirmBemjson : function(){
        return Objects.extend({
            block : 'confirm',
            mods : {
                type : 'modal',
                size : 'm',
                theme : 'vr',
                proof : 'word'
            },
            word : 'УДАЛИТЬ',
            text : [
               'Введите слово ',
               { elem : 'keyword', content : 'удалить' }, ', ',
               'чтобы подтвердить удаление.'
            ]
        }, this._confirmParams || {});
    }
}));

});
