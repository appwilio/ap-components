modules.define('image__config', function(provide){
    var sizes = {
        post : [
            { id: 'w91',  width: 91,  height : 91,     title : 'Миниатюра'},
            { id: 'w200', width: 200, height : 130,    title : 'Маленький'},
            { id: 'w370', width: 370, height : 300,    title : 'Средний'},
            { id: 'w400', width: 400, height : 200,    title : 'Большой'},
            { id: 'w505', width: 505, height : 280,    title : 'Еще побольше'},
            { id: 'w500', width: 500, height : 'auto', title : 'Самый большой'},
        ],
        comment : [
            { id: 'w100',  width: 100,  height : 100 , title : 'Миниатюра'},
        ],
        avatar : [
            { id: 'w41',  width: 41,  height : 41  , title : 'Миниатюра'},
            { id: 'w60',  width: 60,  height : 60  , title : 'Миниатюра'},
            { id: 'w150', width: 150, height : 150 , title : 'Миниатюра'},
            { id: 'w256', width: 256, height : 256 , title : 'Миниатюра'},
        ]
    };
    provide(sizes);
});
