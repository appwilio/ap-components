modules.define('widget', ['i-bem__dom', 'BEMHTML', 'posts-api'], function(provide, BEMDOM, BEMHTML, postsApi) {

provide(BEMDOM.decl({block : this.name, modName : 'type', modVal : 'broadcasts'}, {
    onSetMod: {
        js: {
            inited: function() {
                this._tabs = this.findBlockInside('tabs');
                this._tabsLoaded = [0];
            }
        }
    },

    _onTabChange : function(_, newVal){
        this._currentTab = parseInt(newVal);
        if(this._tabsLoaded.indexOf(this._currentTab) === -1) {
            this._loadPosts(this._currentTab);
        }
    },

    _loadPosts : function(tab){
        filters = {};
        switch (tab) {
            case 1:
                filters.order = 'top_viewed_per_day';
                break;
            case 2:
                filters.order = 'top_viewed_per_week';
                break;
        }
        postsApi
            .getPosts(5, filters)
            .then(function(posts){
                var html = this.__self.processPosts(posts);
                this.setTabContent(tab, html);
                this._tabsLoaded.push(tab);
            }, this);
    },

    setTabContent : function(tabIdx, content){
        var container = this._tabs.elem('box').eq(tabIdx);
        BEMDOM.update(container, content);
    },

}, {
    processPosts : function(posts){
        return BEMHTML.apply({
            block : 'posts',
            mods : {
                size : 's',
                view : 'list',
            },
            data : posts
        });
    },

    live : function(){
        this.liveInitOnBlockInsideEvent(
            'change',
            'tabs',
            this.prototype._onTabChange
        );
    },
}));
})
