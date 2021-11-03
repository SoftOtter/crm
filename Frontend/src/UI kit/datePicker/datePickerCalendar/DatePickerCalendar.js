import React from 'react';
import classNames from 'classnames';
import './datePickerCalendar-style.css'

export class DatePickerCalendar extends React.Component {
    render() {
        const weeks = this.getMonth().map((week, index) => {
            const days = week.map(day => {
                const focused = day.date === this.props.selectedDate && day.month === this.props.selectedMonth;
                //here used shownYear because we should compare with year which we see now. 
                //If now display other year, we shouldn't emphasaize this date and month.
                const today = 
                    day.date === this.props.todayDate &&
                    day.month === this.props.todayMonth &&
                    this.props.shownYear === this.props.todayYear; 
                return <div
                    key={'' + day.date + '_' + day.month}
                    className={'DatePickerCalendar__day'}
                >
                    <button 
                        className={
                            classNames(
                                'DatePickerCalendar__dayButton',
                                focused && 'DatePickerCalendar__dayButton-focused',
                                (!focused && today) && 'DatePickerCalendar__dayButton-today'
                            )
                        }
                        onClick={() => this.handleClickDay(day.date, day.month)}
                    >
                        <span className={classNames(
                            'DatePickerCalendar__dayNumberText', 
                            (day.month !== this.props.shownMonth) && 'DatePickerCalendar__dayNumberText-grey'
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
        const today = new Date(
            this.props.shownYear,
            this.props.shownMonth
        );
        let processingMonth = today.getMonth();
        let prevMonth = processingMonth - 1;
        let nextMonth = processingMonth + 1;

        if (prevMonth < 0) {
            prevMonth = 11;
        }
        
        if (nextMonth > 11) {
            nextMonth = 0;
        }

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
                month: prevMonth,
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
                    processingMonth = nextMonth;
                }
            }
        }

        return monthArray;
    }

    weekDaysConverter = (weekDay) => {
        const weekDayMap = [6, 0, 1, 2, 3, 4, 5];
        return weekDayMap[weekDay];
    }

    handleClickDay = (clickedDate, clickedMonth) => {
        this.props.pickDate(clickedDate, clickedMonth);
    }
}
