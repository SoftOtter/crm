import React from 'react';
import './datePickerHeader-style.css'

export class DatePickerHeader extends React.Component {
    static months = [
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
        'Декабрь',
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
        const shownDate = new Date(
            this.props.selectedYear,
            this.props.selectedMonth,
            this.props.selectedDate
        )
        return (
            <div className={'DatePickerHeader'}>
                <button 
                    className={'DatePickerHeader__yearPicker'}
                    onClick={this.props.onClick}
                >
                    <span className={'DatePickerHeader__yearPickerText'}>{this.props.selectedYear}</span>
                </button>
                <div className={'DatePickerHeader__currentPickedDate'}>
                    {
                        DatePickerHeader.weekDays[shownDate.getDay()]
                        + ', '
                        + DatePickerHeader.months[this.props.selectedMonth]
                        + ' '
                        + this.props.selectedDate
                    }
                </div>
            </div>
        );
    }
}
