import React from 'react';
import classNames from 'classnames';
import { ButtonIcon } from '../../buttonIcon/ButtonIcon';
import { ArrowLeftIcon } from '../../../icons/ArrowLeftIcon';
import { ArrowRightIcon } from '../../../icons/ArrowRightIcon';
import './monthPicker-style.css'

export class MonthPicker extends React.Component {
    static defaultProps = {
        classes: {}
    };

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

    render() {
        return (
            <div className={'MonthPicker'}>
                <ButtonIcon
                    className={
                        classNames(
                            'MonthPicker__switchMonthBtnWrapper MonthPicker__PrevMonth',
                            this.props.classes.marginLeft
                        )
                    }
                    icon = {
                        <ArrowLeftIcon 
                            className={'MonthPicker__arrowIcon MonthPicker__arrowIconLeft iconForButton'}
                        />
                    }
                    onClick={this.handleClickPrevMonth}
                    classes={{
                        btnSize: 'MonthPicker__switchMonthButton'
                    }}
                />
                <div className={'MonthPicker__selectedMonth'}>
                    <p className={'MonthPicker__selectedMonthText'}>
                        {MonthPicker.months[this.props.shownMonth] + ' ' + this.props.shownYear}
                    </p>
                </div>
                <ButtonIcon
                    className={classNames(
                        'MonthPicker__switchMonthBtnWrapper MonthPicker__NextMonth', 
                        this.props.classes.marginRight
                    )}
                    icon={
                        <ArrowRightIcon 
                            className={'MonthPicker__arrowIcon MonthPicker__arrowIconRight iconForButton'}
                        />
                    }
                    onClick={this.handleClickNextMonth}
                    classes={{
                        btnSize: 'MonthPicker__switchMonthButton'
                    }}
                />
            </div>
        );
    }

    handleClickPrevMonth = () => {
        this.props.pickMonth(this.props.shownMonth, 'prev');
    }

    handleClickNextMonth = () => {
        this.props.pickMonth(this.props.shownMonth, 'next');
    }
}
