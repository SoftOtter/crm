import React from 'react';
import classNames from 'classnames';
import './datePickerCalendar-style.css'

export class DatePickerCalendar extends React.Component {
    constructor (props) {
        super(props);
        const currentDay = new Date();

        this.state={
            onFocus: false,
            selectedDate: currentDay.getDate(),
            selectedMonth: currentDay.getMonth(),
            selectedYear: currentDay.getFullYear(),
        }
    }
    render() {
        const weeks = this.getMonth().map((week, index) => {
            const days = week.map(day => {
                const focused = day.date === this.state.selectedDate && day.month === this.state.selectedMonth;
                return <div
                    key={'' + day.date + day.month}
                    className={'DatePickerCalendar__day'}
                >
                    <button 
                        className={classNames('DatePickerCalendar__dayButton', focused && 'DatePickerCalendar__dayButton-focused')}
                        onClick={() => this.handleClickDay(day.date, day.month)}
                    >
                        <span className={classNames(
                            'DatePickerCalendar__dayNumber', 
                            (day.month !== this.state.selectedMonth) && 'DatePickerCalendar__dayNumber-grey'
                        )}>
                            {day.date}
                        </span>
                    </button>
                </div>
            });
            return (
                <div key={index} className={'DatePickerCalendar__week'}>
                    {days}
                </div>
            );
        })

        const weekDays = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'].map(weekDay => 
            <div 
                key={weekDay}
                className={'DatePickerCalendar__weekDay'}
            >
                <span className={'DatePickerCalendar__weekDayText'}>{weekDay}</span>
            </div>
        )
        return (
            <div className={classNames('DatePickerCalendar__calendar', this.props.className)}>
                <div className={'DatePickerCalendar__weekDays'}>
                    {weekDays}
                </div>
                <div className={'DatePickerCalendar__dayPicker'}>
                    {weeks}
                </div>
            </div>
        );
    }

    getMonth = () => {
        const today = new Date();
        let processingMonth = today.getMonth();

        today.setDate(1);
        const startDayOfWeek = this.weekDaysConverter(today.getDay());
        let lastDayOfMonth = new Date(today.getTime());
        lastDayOfMonth.setDate(1);
        lastDayOfMonth.setMonth(lastDayOfMonth.getMonth() + 1);
        lastDayOfMonth.setDate(0);
        lastDayOfMonth = lastDayOfMonth.getDate();

        const monthArray = [[], [], [], [], [], []];
        for (let i = 0; i < 6; i++) {
            for (let j = 0; j < 7; j++) {
                monthArray[i][j] = null;
            }
        }

        let lastDateOfPrevMonth = new Date(today.getTime());
        lastDateOfPrevMonth.setDate(0);
        lastDateOfPrevMonth = lastDateOfPrevMonth.getDate();
        for (let i = startDayOfWeek - 1; i >= 0; i--) {
            monthArray[0][i] = {
                date: lastDateOfPrevMonth--,
                month: processingMonth - 1,
            };
        }

        let counter = 1;

        for (let i = startDayOfWeek; i < 7; i++) {
            monthArray[0][i] = {
                date: counter++,
                month: processingMonth,
            };
        }

        for (let i = 1; i < 6; i++) {
            for (let j = 0; j < 7; j++) {
                monthArray[i][j] = {
                    date: counter++,
                    month: processingMonth,
                };
                if (counter > lastDayOfMonth) {
                    counter = 1;
                    processingMonth = processingMonth + 1;
                }
            }
        }

        return monthArray;

        const monthArray2 = [
            [null, null, 1, 2, 3, 4, 5],
            [6, 7, 8, 9, 10, 11, 12],
            [13, 14, 15, 16, 17, 18, 19],
            [20, 21, 22, 23, 24, 25, 26],
            [27, 28, 29, 30, null, null, null],
            [null, null, null, null, null, null, null]
        ]
    }

    weekDaysConverter = (weekDay) => {
        const weekDayMap = [6, 0, 1, 2, 3, 4, 5];
        return weekDayMap[weekDay];
    }

    handleClickDay = (clickedDate, clickedMonth) => {

        this.setState ({
            selectedDate: clickedDate,
            selectedMonth: clickedMonth
        })
    }
}
