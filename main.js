const getWeekDay = (date) => {
    let days = ['вс','пн', 'вт', 'ср', 'чт', 'пт', 'сб' ];
    return days[date.getDay()];
}

let date= new Date(2023, 0, 1)
alert(getWeekDay(date))