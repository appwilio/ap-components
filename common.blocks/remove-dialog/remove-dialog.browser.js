modules.define('remove-dialog', ['i-bem__dom', 'BEMHTML', 'objects'],
               function(provide, BEMDOM, BEMHTML, Objects) {

provide(BEMDOM.declMix(this.name, {

    /**
     * call remove dialog
     * @param {Boolean} force don't ask confirm
     * @public
     */
    remove : function(force){
        if(force){
            return this._remove();
        }

        var removeConfirm = this.findBlockOn(
            BEMDOM.after(this.domElem, BEMHTML.apply(this._getConfirmBemjson())),
            'confirm'
        );

        removeConfirm.on('yes', function(){
            BEMDOM.destruct(removeConfirm.domElem);
            this._remove();
        }, this);

        removeConfirm.on('no', function(){
            BEMDOM.destruct(this.domElem); // destruct confirm
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
