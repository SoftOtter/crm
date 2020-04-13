import React from 'react';
import { ButtonWithIcon } from '../buttonWithIcon/ButtonWithIcon';
import { DatePickerCalendar } from './datePickerCalendar/DatePickerCalendar';
import { MonthPicker } from './MonthPicker/MonthPicker';
import './datePicker-style.css'
import { DatePickerHeader } from './datePickerHeader/DatePickerHeader';

export class DatePicker extends React.Component {
    render() {
        return (
            <div className={'DatePicker__container'}>
                <div className={'DatePicker__wrapper'}>
                    <div className={'DatePicker'}>
                        <DatePickerHeader />
                        <div className={'DatePicker__content'}>
                            <MonthPicker classes={{
                                marginLeft: 'DatePicker__prevMonthMarginLeft',
                                marginRight: 'DatePicker__nextMonthMarginRight'
                            }}/>
                            <DatePickerCalendar className={'DatePicker__calendar'} />
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
                            onClick={this.handleClickForConfirm}
                        />
                    </div>
                </div>
            </div>
            
        );
    }
}
