import React from 'react';
import './datePickerHeader-style.css'

export class DatePickerHeader extends React.Component {
    render() {
        return (
            <div className={'DatePickerHeader'}>
                <button className={'DatePickerHeader__yearPicker'}>
                    <span className={'DatePickerHeader__yearPickerText'}>2020</span>
                </button>
                <div className={'DatePickerHeader__currentPickedDate'}>Сб, Апрель 11</div>
            </div>
        );
    }
}
