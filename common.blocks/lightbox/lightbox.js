modules.define('lightbox',['jquery','fancybox','i-bem__dom'], function(provide,$ ,fancy, DOM) {

provide(DOM.decl('lightbox', {
    onSetMod : {
        'js' : {
            'inited' : function() { 
                
                this.config = this.params.config;
                this.group = this.domElem.attr('rel');
                this.url = this.params.url || this.domElem.attr('href');  
            }
        },

    },
    _open:function(){     
      if (this.group) {
        $.fancybox.open($('[rel='+this.group+']'), this.config);
      } else {
        $.fancybox.open(this.url, this.config);
      }
      this.emit('opened');
      return false;
    },
    _close:function(){
      $.fancybox.close();
      this.emit('closed');
    }
    
  },{
    live:function(){
      this.liveBindTo('click',function(){
        this._open();      
        return false;
      });
    }
  } 
  )); 
});
