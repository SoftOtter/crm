import React from 'react';
import { ButtonWithIcon } from '../buttonWithIcon/ButtonWithIcon';
import { DatePickerCalendar } from './datePickerCalendar/DatePickerCalendar';
import { MonthPicker } from './MonthPicker/MonthPicker';
import './datePicker-style.css'
import { DatePickerHeader } from './datePickerHeader/DatePickerHeader';
import { YearList } from './yearList/YearList';

export class DatePicker extends React.Component {
    constructor (props) {
        super(props);
        const currentDay = new Date();

        this.state={
            selectedDate: currentDay.getDate(),
            selectedMonth: currentDay.getMonth(),
            selectedYear: currentDay.getFullYear(),
            shownMonth: currentDay.getMonth(),
            shownYear: currentDay.getFullYear(),
            showYearList: false,
        }

        this.containerRef = React.createRef();
    }

    render() {
        return (
            <div 
                className={'DatePicker__container'}
                ref={this.containerRef}
                onClick={this.handleContainerClick}
            >
                <div className={'DatePicker__wrapper'}>
                    <div className={'DatePicker'}>
                        <DatePickerHeader 
                            selectedDate={this.state.selectedDate}
                            selectedMonth={this.state.selectedMonth}
                            selectedYear={this.state.selectedYear}
                            onClick={this.handleClickYear}
                        />
                        <div className={'DatePicker__content'}>
                            { 
                                !this.state.showYearList && <>
                                    <MonthPicker
                                        classes={{
                                            marginLeft: 'DatePicker__prevMonthMarginLeft',
                                            marginRight: 'DatePicker__nextMonthMarginRight'
                                        }}
                                        selectedMonth={this.state.selectedMonth}
                                        shownMonth={this.state.shownMonth}
                                        shownYear={this.state.shownYear}
                                        pickMonth={this.pickedMonth}
                                    />
                                    <DatePickerCalendar 
                                        className={'DatePicker__calendar'}
                                        selectedDate={this.state.selectedDate}
                                        selectedMonth={this.state.selectedMonth}
                                        shownMonth={this.state.shownMonth}
                                        shownYear={this.state.shownYear}
                                        pickDate={this.pickedDate}
                                    />
                                </>
                            }

                            {this.state.showYearList && 
                                <YearList 
                                    className={'DatePicker__yearList'}
                                    selectedYear={this.state.selectedYear}
                                    pickYear={this.pickedYear}
                                />
                            }
                            
                        </div>
                    </div>
                    <div className={'DatePicker__buttons'}>
                        <ButtonWithIcon
                            className={'DatePicker__button DatePicker__cancelButton'}
                            buttonText={'Отмена'}
                            onClick={this.handleClickForCancel}
                        />
                        <ButtonWithIcon
                            className={'DatePicker__button DatePicker__confirmButton'}
                            buttonText={'Ок'}
                            onClick={() => this.handleClickForConfirm(this.state.selectedYear, this.state.selectedMonth, this.state.selectedDate)}
                        />
                    </div>
                </div>
            </div>
            
        );
    }

    handleClickForCancel = () => {
        this.props.clickCancel();
    }

    handleClickForConfirm = (year, month, date) => {
        this.props.clickConfirm(year, month, date);
    }
 
    pickedDate = (clickedDate, clickedMonth) => {
        let shownYear = this.state.shownYear;
        if (clickedMonth === 0 && this.state.shownMonth === 11) {
            shownYear = shownYear + 1;
        } else if (clickedMonth === 11 && this.state.shownMonth === 0) {
            shownYear = shownYear - 1;
        }
        this.setState ({
            selectedDate: clickedDate,
            selectedMonth: clickedMonth,
            selectedYear: shownYear,
        })
    }

    // Set boundary years (1900-2099)
    pickedMonth = (month, action) => {
        let shownYear = this.state.shownYear;
        if (action === 'prev') {
            month = month - 1;
        } else if (action === 'next') {
            month = month + 1;
        }

        if (month < 0) {
            month = 11;
            shownYear = shownYear - 1;
        } else if (month > 11) {
            month = 0;
            shownYear = shownYear + 1;
        }

        this.setState({
            shownMonth: month,
            selectedMonth: month,
            selectedYear: shownYear,
            shownYear: shownYear,
        })
    }

    handleClickYear = () => {
        this.setState({
            showYearList: !this.state.showYearList,
        })
    }

    pickedYear = (year) => {
        this.setState({
            selectedYear: year,
            shownYear: year,
            showYearList: false,
        })
    }

    handleContainerClick = (event) => {
        if (event.target === this.containerRef.current) {
            this.props.clickCancel();
        }
    }
}
