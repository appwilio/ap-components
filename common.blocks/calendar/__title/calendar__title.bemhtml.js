block('calendar').elem('title')(
    content()(function(){
        var getMonthName = function(n){
                return [
                    'Январь',
                    'Февраль',
                    'Март',
                    'Апрель',
                    'Май',
                    'Июнь',
                    'Июль',
                    'Август',
                    'Сентябрь',
                    'Октябрь',
                    'Ноябрь',
                    'Декабрь'
                ][n];
            },
            date = this.date;
        return getMonthName(date.getMonth()) + ' '  + date.getFullYear();
    })
);
