/*const getWeekDay = (date) => {
    let days = ['вс','пн', 'вт', 'ср', 'чт', 'пт', 'сб' ];
    return days[date.getDay()];
}

let date= new Date(2023, 0, 1)
alert(getWeekDay(date))*/

/*let sumTo = (n) => {
    if ( n===1) {
        return 1;
    } else {
        return n + sumTo(n-1);
    }

};

console.log(sumTo(10));*/

/*let factorial = (n) => {
    if ( n===1) {
        return 1;
    } else {
        return (n * factorial(n-1));
    }
}

console.log(factorial(3));*/

/*console.time('Время выполнения скрипта');
function factorial(n) {
    return (n !== 1) ? n * factorial(n - 1) : 1;
}

console.log(factorial(77))
console.timeEnd('Время выполнения скрипта')*/

let arr = [3, 1, 3, 5, 7, 0, 12, 11, 23, 30];

console.log(Math.max(...arr));