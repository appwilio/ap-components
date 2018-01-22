/* global modules:false */

modules.define('float',
   ['i-bem-dom', 'scrollspy', 'functions__throttle'],
   function(provide, bemDom, Scrollspy, throttle) {

provide(bemDom.declBlock(this.name, Scrollspy, {
    onSetMod : {
        'js' : {
            'inited' : function(){
                this.__base.apply(this, arguments);

                this.fixable = this._elem('content'); // фиксируемый элемент
                this._offset = this.params.offset || 0; // отступ сверху и снизу от края экрана

                this._parent = this.domElem.parent(); // Элемент внутри которого все скроллится
                this._parentHeight = this._parent.height(); // Высота родителя

                this.setFixWidth();

                this.setFixedPos();

                if(this.__self.observer){
                    var observer = new this.__self.observer(throttle(this.calcOffsets, 2000, this));
                    observer.observe(this._parent[0], {
                        subtree : true,
                        childList : true,
                        attributes : true,
                        attributeFilter : ['height', 'top', 'position']
                    });
                    this._observer = observer;
                } else {
                    // Периодически проверяем, не изменилась ли высота блоков
                    this._fixableHeight = this.fixable.domElem.height(); // Высота контента
                    this._timer = setInterval(this._checkValues.bind(this), 2000);
                }
            },
            '' : function(){
                this._observer? this._observer.disconnect(): clearInterval(this._timer);
            }
        },

        state : {
            default : function(){
                this.fixable.domElem.css({
                    'width' : '',
                    'position' : ''
                });
            },
            fixed : function(){
                this.fixable.domElem.css({
                    'position' : 'fixed'
                });
            },
            paused : function(){
                this.fixable.domElem.css({
                    'top' : this._ofbottom - this._oftop - this.height,
                    'position' : 'absolute'
                });
            }
        }
    },

    /**
     * Пересчитывает позицию блока, елси изменилась высота родителя
     * Вызывается по таймеру
     * @callback
     * @private
     */
    _checkValues : function(){
        var currentHeight = this._parent.height(),
            currentFixableHeight = this.fixable.domElem.height();

        if(this._parentHeight === currentHeight && currentFixableHeight === this._fixableHeight) {
            return this;
        }

        this._fixableHeight = currentFixableHeight;
        this.calcOffsets();

        return this;
    },

    _updateParentHeight : function(newHeight){
        this._parentHeight = newHeight || this._parent.height();

        return this;
    },

    beforeSetMod : {
        state : {
            fixed : function(){
                this.fixable.domElem.css({
                    'top' : this._fixPosTop,
                    'left' : this._fixPosLeft,
                    'width' : this.domElem.css('width')
                });
            },
            paused : function(){
                this.fixable.domElem.css({
                    'left' : this._fixPosLeft,
                    'width' : this.domElem.css('width')
                });
            }
        }
    },

    _updateDomHeight : function(){
        this.domElem.height(this.fixable.domElem.height());

        return this;
    },

    /**
     * Рассчитывает "ширину" зоны фиксирования без отступов
     */
    setFixWidth : function(){
        // абсолютное значение scrollTop для начала фиксирования
        this.fixStart = false;
        // абсолютное значение scrollTop конца фиксирования
        this.fixStop = this._parent.offset().top + this._parentHeight;

        return this;
    },

    /**
     * Рассчитывает позицию блока в фиксированном состоянии
     * @param {String} top - отступ сверху в px или %
     * @param {String} left - отступ слева в px или %
     */
    setFixedPos : function(top, left){
        // Calc position for fixed state
        this._fixPosTop = this._offset;
        if(left !== undefined){
            this._fixPosLeft = this.__self.getOffset(left);
        }

        return this;
    },

    /**
     * Рассчитывает абсолютные позиции начала и конца фиксирования
     */
    calcOffsets : function(){
        this._updateParentHeight();
        this._updateDomHeight();
        this.setFixWidth();

        this.__base.apply(this, arguments);

        // По умолчанию фиксируем в начале зоны фиксирования
        this._oftop = this.fixStart?
            this.fixStart - this._offset:
            this._oftop - this._offset * 2; // Верхняя граница фиксирования с учетом отступа
        this._ofbottom = this.fixStop?
            this.fixStop - this._offset * 2:
            this._ofbottom - this._offset * 2; // Нижняя граница фиксирования с учетом отступа
        this.setFixedPos();

        return this;
    },

    /**
     * Runs everytime on every block
     * @returns {bool}
     */
    _onScroll : function() {
      var self = this.__self,
          // Если скролл + высота больше нижней границы фиксирования пора остановиться
          bottomReached = this._ofbottom <= (self.scroll + this.height);

      // scrolled down
      if(this._oftop <= self.scroll && !bottomReached) {
          return this.activate(bottomReached);
      }

      return this.deactivate(bottomReached);
    },

    /**
     * Элемент в зоне фиксирования
     * @returns {boolean}
     */
    activate : function(){
        if(this.__base.apply(this, arguments)){
            return false;
        }

        this.setMod('state', 'fixed');
    },

    /**
     * Элемент вне зоны фиксирования
     * @param {bool} fixStoped остановка фиксирования внизу
     * @returns {bool}
     */
    deactivate : function(fixStoped){
        if(this.__base.apply(this, arguments)){
            return false;
        }

        this.setMod('state', fixStoped? 'paused': 'default');
    }
}, {
    observer : window.MutationObserver || window.WebkitMutationObserver
}));

});

