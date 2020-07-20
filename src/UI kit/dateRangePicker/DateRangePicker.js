import React from 'react';
import { DateRangePickerCalendar } from './DateRangePickerCalendar/DateRangePickerCalendar';
import { ButtonWithIcon } from '../buttonWithIcon/ButtonWithIcon';
import { DateRangePickerHeader } from './DateRangePickerHeader/DateRangePickerHeader';
import { MonthPickerForRange } from './MonthPickerForRange/MonthPickerForRange';
import './dateRangePicker-style.css'

export class DateRangePicker extends React.Component {
    constructor (props) {
        super(props);
        let currentDay = new Date();
        if (props.date) {
            currentDay = new Date(props.date.year, props.date.month, props.date.date);
        }

        this.state={
            todayDate: currentDay.getDate(),
            todayMonth: currentDay.getMonth(),
            todayYear: currentDay.getFullYear(),

            endSelectedDate: currentDay.getDate(),
            endSelectedMonth: currentDay.getMonth(),
            endSelectedYear: currentDay.getFullYear(),
            rightShownMonth: currentDay.getMonth(),
            rightShownYear: currentDay.getFullYear(),

            startSelectedDate: currentDay.getDate() - 6,
            startSelectedMonth: currentDay.getMonth(),
            startSelectedYear: currentDay.getFullYear(),
            leftShownMonth: currentDay.getMonth() - 1,
            leftShownYear: currentDay.getFullYear(),

            isStartAssign: false,
        }
    }
    render() {
        return (
            <div 
                className={'DateRangePicker__container'}
            >
                <div className={'DateRangePicker__wrapper'}>
                    <div className={'DateRangePicker'}>
                        <DateRangePickerHeader
                            startSelectedDate={this.state.startSelectedDate}
                            startSelectedMonth={this.state.startSelectedMonth}
                            startSelectedYear={this.state.startSelectedYear}
                            endSelectedDate={this.state.endSelectedDate}
                            endSelectedMonth={this.state.endSelectedMonth}
                            endSelectedYear={this.state.endSelectedYear}
                            switchSide={this.switchSide}
                        />
                        <div className={'DateRangePicker__content'}>
                            <div className={'DateRangePicker__Month DateRangePicker__leftMonth'}>
                                <MonthPickerForRange
                                    classes={{
                                        marginLeft: 'DateRangePicker__prevMonthMarginLeft',
                                        marginRight: 'DateRangePicker__nextMonthMarginRight'
                                    }}
                                    prevButton
                                    selectedMonth={this.state.endSelectedMonth}
                                    shownMonth={this.state.leftShownMonth}
                                    shownYear={this.state.leftShownYear}
                                    pickMonth={this.pickedMonth}
                                />
                                <DateRangePickerCalendar 
                                    className={'DateRangePicker__calendar'}
                                    todayDate={this.state.todayDate}
                                    todayMonth={this.state.todayMonth}
                                    todayYear={this.state.todayYear}
                                    endSelectedDate={this.state.endSelectedDate}
                                    endSelectedMonth={this.state.endSelectedMonth}
                                    endSelectedYear={this.state.endSelectedYear}
                                    startSelectedDate={this.state.startSelectedDate}
                                    startSelectedMonth={this.state.startSelectedMonth}
                                    startSelectedYear={this.state.startSelectedYear}
                                    shownMonth={this.state.leftShownMonth}
                                    shownYear={this.state.leftShownYear}
                                    pickDate={this.pickedDate}
                                />
                            </div>
                            <div className={'DateRangePicker__Month DateRangePicker__rightMonth'}>
                                <MonthPickerForRange
                                    classes={{
                                        marginLeft: 'DateRangePicker__prevMonthMarginLeft',
                                        marginRight: 'DateRangePicker__nextMonthMarginRight'
                                    }}
                                    nextButton
                                    selectedMonth={this.state.endSelectedMonth}
                                    shownMonth={this.state.rightShownMonth}
                                    shownYear={this.state.rightShownYear}
                                    pickMonth={this.pickedMonth}
                                />
                                <DateRangePickerCalendar 
                                    className={'DateRangePicker__calendar'}
                                    todayDate={this.state.todayDate}
                                    todayMonth={this.state.todayMonth}
                                    todayYear={this.state.todayYear}
                                    endSelectedDate={this.state.endSelectedDate}
                                    endSelectedMonth={this.state.endSelectedMonth}
                                    endSelectedYear={this.state.endSelectedYear}
                                    startSelectedDate={this.state.startSelectedDate}
                                    startSelectedMonth={this.state.startSelectedMonth}
                                    startSelectedYear={this.state.startSelectedYear}
                                    shownMonth={this.state.rightShownMonth}
                                    shownYear={this.state.rightShownYear}
                                    pickDate={this.pickedDate}
                                />
                            </div>
                        </div>
                    </div>
                    <div className={'DateRangePicker__buttons'}>
                        <ButtonWithIcon
                            className={'DateRangePicker__button DateRangePicker__cancelButton'}
                            buttonText={'Отмена'}
                        />
                        <ButtonWithIcon
                            className={'DateRangePicker__button DateRangePicker__confirmButton'}
                            buttonText={'Ок'}
                        />
                    </div>
                </div>
            </div>
        );
    }

    pickedMonth = (month, action) => {
        let rightShownYear = this.state.rightShownYear;
        let leftShownYear = this.state.leftShownYear;
        let rightShownMonth = this.state.rightShownMonth;
        let leftShownMonth = this.state.leftShownMonth;

        if (action === 'prev') {
            rightShownMonth = rightShownMonth - 1;
            leftShownMonth = leftShownMonth - 1
        } else if (action === 'next') {
            rightShownMonth = rightShownMonth + 1;
            leftShownMonth = leftShownMonth + 1
        }

        if (leftShownMonth < 0) {
            leftShownMonth = 11;
            leftShownYear = leftShownYear - 1;
        } else if (leftShownMonth > 11) {
            leftShownMonth = 0;
            leftShownYear = leftShownYear + 1;
        }

        if (rightShownMonth < 0) {
            rightShownMonth = 11;
            rightShownYear = rightShownYear - 1;
        } else if (rightShownMonth > 11) {
            rightShownMonth = 0;
            rightShownYear = rightShownYear + 1;
        }

        this.setState({
            rightShownMonth: rightShownMonth,
            rightShownYear: rightShownYear,

            leftShownMonth: leftShownMonth,
            leftShownYear: leftShownYear,
        })
    }

    pickedDate = (clickedDate, clickedMonth, clickedYear) => {
        if (this.state.isStartAssign) {
            this.setState ({
                endSelectedDate: clickedDate,
                endSelectedMonth: clickedMonth,
                endSelectedYear: clickedYear,
                isStartAssign: false,
            })
        } else {
             this.setState ({
                startSelectedDate: clickedDate,
                startSelectedMonth: clickedMonth,
                startSelectedYear: clickedYear,
                isStartAssign: true,
            })
        }
    }

    switchSide = (side) => {
        if (side === 'start') {
            this.setState ({
                isStartAssign: false,
            })
        } else if (side === 'end') {
            this.setState ({
                isStartAssign: true,
            })
        }
    }
}
