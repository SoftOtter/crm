import React from 'react';

class CurrentDate extends React.Component {
    static months = [
        'января',
        'февраля',
        'марта',
        'апреля',
        'мая',
        'июня',
        'июля',
        'августа',
        'сентября',
        'октября',
        'ноября',
        'декабря',
    ];

    static weekDays = [
        'Вс',
        'Пн',
        'Вт',
        'Ср',
        'Чт',
        'Пт',
        'Сб',
    ];

    render() {
        const today = new Date();
        const dateString =
            today.getDate()
            + ' '
            + CurrentDate.months[today.getMonth()]
            + ' '
            + CurrentDate.weekDays[today.getDay()];

        return (<>
            <div className='date'>{dateString}</div>
        </>);
    }
}

export default CurrentDate;
