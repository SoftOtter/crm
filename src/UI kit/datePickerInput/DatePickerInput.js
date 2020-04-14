import React from 'react';
import './datePickerInput-style.css'
import { InputWithMask } from '../fields/InputWithMask';
import { CalendarIcon } from '../../icons/CalendarIcon';
import { DatePicker } from '../datePicker/DatePicker';


export class DatePickerInput extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            datePickerOpen: false,
            inputValue: '',
            error: false,
        }
    }
    render() {
        return (
            <>
                <InputWithMask
                    className={'DatePickerInput'}
                    icon={<CalendarIcon className={'DatePickerInput__calendarIcon'}/>}
                    label={'Дата'}
                    placeholder={'MM/DD/YYYY'}
                    onButtonClick={this.handleClickCalendar}
                    mask={"99/99/9999"}
                    value={this.state.inputValue}
                    onChange={this.handleInputChange}
                    error={this.state.error && 'Invalid date'}
                />

                {this.state.datePickerOpen &&
                        <DatePicker 
                            clickCancel={this.handleClickCancel}
                            clickConfirm={this.handleClickConfirm}
                        />
                }
            </>
        );
    }

    handleClickCalendar = () => {
        this.setState({
            datePickerOpen: true
        })
    }

    handleClickCancel = () => {
        this.setState({
            datePickerOpen: false
        })
    }

    handleClickConfirm = (year, month, date) => {
        month = this.addZero(month + 1);
        date = this.addZero(date);

        this.setState({
            inputValue: month + '/' + date + '/' + year,
            error: false,
            datePickerOpen: false,
        });
    }

    addZero = (number) => {
        number = number.toString();
        if (number.length < 2) {
            number = '0' + number;
        }
        return number;
    }

    handleInputChange = (event) => {
        let newValue = event.target.value;
        
        let error = false;
        if (newValue !== '__/__/____' && newValue !== '') {
            let [newMonth, newDate, newYear] = newValue.split('/');

            newDate = Number(newDate);
            newMonth = Number(newMonth);
            newYear = Number(newYear);

            if (isNaN(newDate) || isNaN(newMonth) || isNaN(newYear)) {
                error = true;
            } else {
                if (newYear < 1900 || newYear > 2100) {
                    error = true;
                } else if (newMonth < 1 || newMonth > 12) {
                    error = true;
                } else {
                    let date = new Date(newYear, newMonth);
                    date.setMonth(date.getMonth() + 1);
                    date.setDate(0);
                    const lastDateOfNewMonth = date.getDate();
                    if (newDate < 1 || newDate > lastDateOfNewMonth) {
                        error = true;
                    }
                }
            }
        }

        this.setState({
            inputValue: newValue,
            error: error,
        });
    }

    isValueValid = (value) => {

    }
}
