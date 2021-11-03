import React from 'react';
import classNames from 'classnames';
import './dateRangePickerCalendar-style.css'

export class DateRangePickerCalendar extends React.Component {
    render() {
        const selectedStartDate = new Date(
            this.props.startSelectedYear,
            this.props.startSelectedMonth,
            this.props.startSelectedDate
        )

        const selectedEndDate = new Date(
            this.props.endSelectedYear,
            this.props.endSelectedMonth,
            this.props.endSelectedDate
        )

        const weeks = this.getMonth().map((week, index) => {
            const days = week.map(day => {
                if (day == null) {
                    return <div
                        className={'DateRangePickerCalendar__day'}
                    />
                }
                const focusedStartDate = day.date === this.props.startSelectedDate && day.month === this.props.startSelectedMonth;
                const focusedEndDate = day.date === this.props.endSelectedDate && day.month === this.props.endSelectedMonth;

                const dayDate = new Date(
                    day.year,
                    day.month,
                    day.date
                );

                const isBetween = dayDate > selectedStartDate && dayDate < selectedEndDate;

                const today = 
                day.date === this.props.todayDate &&
                day.month === this.props.todayMonth &&
                day.year === this.props.todayYear; 

                return <div
                    key={'' + day.date + '_' + day.month}
                    className={'DateRangePickerCalendar__day'}
                >
                    <button 
                        className={
                            classNames(
                                'DateRangePickerCalendar__dayButton',
                                (focusedStartDate || focusedEndDate) && 'DateRangePickerCalendar__dayButton-focused',
                                today && 'DateRangePickerCalendar__dayButton-today',
                                isBetween && 'DateRangePickerCalendar__dayButton-selectedRange'
                            )
                        }
                        onClick={() => this.handleClickDay(day.date, day.month, day.year)}
                    >
                        <span className={classNames(
                            'DateRangePickerCalendar__dayNumberText', 
                            (day.month !== this.props.shownMonth) && 'DateRangePickerCalendar__dayNumberText-grey'
                        )}>
                            {day.date}
                        </span>
                    </button>
                </div>
            });
            return (
                <div key={index} className={'DateRangePickerCalendar__week'}>
                    {days}
                </div>
            );
        })

        const weekDays = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'].map(weekDay => 
            <div 
                key={weekDay}
                className={'DateRangePickerCalendar__weekDay'}
            >
                <span className={'DateRangePickerCalendar__weekDayText'}>{weekDay}</span>
            </div>
        )
        return (
            <div className={classNames('DateRangePickerCalendar__calendar', this.props.className)}>
                <div className={'DateRangePickerCalendar__weekDays'}>
                    {weekDays}
                </div>
                <div className={'DateRangePickerCalendar__dayPicker'}>
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
        let prevMonthYear = this.props.shownYear;
        let processingYear = this.props.shownYear;

        if (prevMonth < 0) {
            prevMonth = 11;
            prevMonthYear = prevMonthYear - 1;
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

        // let lastDateOfPrevMonth = new Date(today.getTime());
        // lastDateOfPrevMonth.setDate(0);
        // lastDateOfPrevMonth = lastDateOfPrevMonth.getDate();
        // for (let i = startDayOfWeek - 1; i >= 0; i--) {
        //     monthArray[0][i] = {
        //         date: lastDateOfPrevMonth--,
        //         month: prevMonth,
        //         year: prevMonthYear,
        //     };
        // }

        let counter = 1;

        for (let i = startDayOfWeek; i < 7; i++) {
            monthArray[0][i] = {
                date: counter++,
                month: processingMonth,
                year: processingYear,
            };
        }

        weeks: for (let i = 1; i < 6; i++) {
            for (let j = 0; j < 7; j++) {
                monthArray[i][j] = {
                    date: counter++,
                    month: processingMonth,
                    year: processingYear,
                };
                if (counter > lastDayOfMonth) {
                    // counter = 1;
                    // processingMonth = nextMonth;
                    // if (nextMonth === 0)
                    // {
                    //     processingYear = processingYear + 1;
                    // }
                    break weeks;
                }
            }
        }

        return monthArray;
    }

    weekDaysConverter = (weekDay) => {
        const weekDayMap = [6, 0, 1, 2, 3, 4, 5];
        return weekDayMap[weekDay];
    }

    handleClickDay = (clickedDate, clickedMonth, clickedYear) => {
        this.props.pickDate(clickedDate, clickedMonth, clickedYear);
    }
}
