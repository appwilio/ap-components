module.exports = function(bh) {
    bh.match('calendar__title',
 function(ctx) {
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
        date = ctx.tParam('date'),
        title = getMonthName(date.getMonth()) + ' '  + date.getFullYear();

        ctx.content(title, true);
    });
};
