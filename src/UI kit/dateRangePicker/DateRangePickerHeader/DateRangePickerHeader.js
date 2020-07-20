import React from 'react';
import classNames from 'classnames';
import { ButtonIcon } from '../../buttonIcon/ButtonIcon';
import { EditIcon } from '../../../icons/EditIcon';
import { CompactInputWithMask } from '../../compactInput/CompactInputWithMask';
import './dateRangePickerHeader-style.css'

export class DateRangePickerHeader extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            datePickerOpen: false,
            inputValue: '',
            error: false,
            manualMode: false,
        }
    }

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
        'Воскресенье',
        'Понедельник',
        'Вторник',
        'Среда',
        'Четверг',
        'Пятница',
        'Суббота',
    ];

    render() {
        const shownStartDate = new Date(
            this.props.startSelectedYear,
            this.props.startSelectedMonth,
            this.props.startSelectedDate
        )

        const shownEndDate = new Date(
            this.props.endSelectedYear,
            this.props.endSelectedMonth,
            this.props.endSelectedDate
        )

        let content = null;
        if (this.state.manualMode) {
            content = <>
                <CompactInputWithMask
                    className={'DateRangePickerHeader__dateInput DateRangePickerHeader__startDateInput'}
                    label={'Start date'}
                    error = {''}
                    inputId={'startDateInputId'}
                    mask={"99/99/9999"}
                />

                <p className={'DateRangePickerHeader__dash'}>{'\u2013'}</p>

                <CompactInputWithMask
                    className={'DateRangePickerHeader__dateInput DateRangePickerHeader__endDateInput'}
                    label={'End date'}
                    error = {''}
                    inputId={'endtDateInputId'}
                    mask={"99/99/9999"}
                />
            </>
        } else {
            content = <>
                <div 
                    className={'DateRangePickerHeader__date DateRangePickerHeader__startDate'}
                    onClick={this.handleStartDateClick}
                >
                    <span className={'DateRangePickerHeader__dateString'}>
                        {
                            DateRangePickerHeader.months[this.props.startSelectedMonth]
                            + ' '
                            + this.props.startSelectedDate
                            + ', '
                            + this.props.startSelectedYear
                        }
                    </span>
                    <br/>
                    <span className={'DateRangePickerHeader__weekDay'}>
                        {DateRangePickerHeader.weekDays[shownStartDate.getDay()]}
                    </span>
                </div>

                <p className={'DateRangePickerHeader__dash'}>{'\u2013'}</p>

                <div 
                    className={'DateRangePickerHeader__date DateRangePickerHeader__endDate'}
                    onClick={this.handleEndDateClick}
                >
                    <span className={'DateRangePickerHeader__dateString'}>
                        
                        {
                            DateRangePickerHeader.months[this.props.endSelectedMonth]
                            + ' '
                            + this.props.endSelectedDate
                            + ', '
                            + this.props.endSelectedYear
                        }
                    </span>
                    <br/>
                    <span className={'DateRangePickerHeader__weekDay'}>
                        
                        {DateRangePickerHeader.weekDays[shownEndDate.getDay()]}
                    </span>
                </div>
            </>
        }
        return (
            <div className='DateRangePickerHeader'>
                <div className='DateRangePickerHeader__dates'>
                    {content}
                </div>
                
                <ButtonIcon
                    className={'DateRangePickerHeader__editDateButton'}
                    icon = {
                        <EditIcon
                            className={classNames('DateRangePickerHeader__editDateIcon', this.state.manualMode && 'DateRangePickerHeader__manualMode')}
                        />
                    }
                    onClick={this.handleClickEditDate}
                />
           </div>
        );
    }

    handleClickEditDate = () => {
        this.setState({
            manualMode: !this.state.manualMode
        })
    }

    handleStartDateClick = () => {
        this.props.switchSide('start');
    }

    handleEndDateClick = () => {
        this.props.switchSide('end');
    }

}
