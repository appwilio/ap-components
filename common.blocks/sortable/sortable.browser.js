/* global modules:false */

modules.define('sortable',
               ['i-bem__dom', 'jquery', 'dom'],
               function(provide, BEMDOM, $, dom) {

BEMDOM.decl('sortable', {
    onSetMod: {
        'js': {
            'inited': function(){
                this.setAttrs();
            }
        }
    },

    setAttrs: function() {
        this.findElem('item').map(function(item){
            //item.attr('draggable', 'true');
        }, this);
    },

    _onDrop: function(e){
        if(e.originalEvent.dataTransfer.files.length ||
           !dom.contains(this.domElem, $(e.target))){
            return false;
        }

        e.preventDefault();
        var saved = '#'+e.originalEvent.dataTransfer.getData('text/plain');
        saved = $(saved);
        if (saved.index() > $(e.target).index()){
            this.domElem.is($(e.target))?
                BEMDOM.append(this.domElem, saved):
                BEMDOM.before(e.target, saved);
        } else {
            this.domElem.is($(e.target))?
                BEMDOM.append(this.domElem, saved):
                BEMDOM.after(e.target, saved);
        }
        this.emit('sortend');
    }

},{
    live: function() {
        this
            .liveBindTo('dragstart', function(e){
                e.originalEvent.dataTransfer.setData(
                    "text/plain",
                    e.target.id
                );
            })
            .liveBindTo('dragover', function(e){
                e.preventDefault();
            })
            .liveBindTo('drop', function(e){
                this._onDrop(e);
            });
    }
});

provide(BEMDOM);

});

