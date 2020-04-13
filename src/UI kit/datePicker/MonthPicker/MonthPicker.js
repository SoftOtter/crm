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

    render() {
        return (
            <div className={'MonthPicker'}>
                <ButtonIcon
                    className={classNames('MonthPicker__switchMonthButton MonthPicker__PrevMonth', this.props.classes.marginLeft)}
                    icon = {<ArrowLeftIcon className={'MonthPicker__arrowIcon MonthPicker__arrowIconLeft iconForButton'}/>}
                    onClick={this.handleClickPrevMonth}
                />
                <div className={'MonthPicker__selectedMonth'}>
                    <p className={'MonthPicker__selectedMonthText'}>Апрель 2020</p>
                </div>
                <ButtonIcon
                    className={classNames('MonthPicker__switchMonthButton MonthPicker__NextMonth', this.props.classes.marginRight)}
                    icon = {<ArrowRightIcon className={'MonthPicker__arrowIcon MonthPicker__arrowIconRight iconForButton'}/>}
                    onClick={this.handleClickNextMonth}
                />
            </div>
        );
    }

    handleClickPrevMonth = () => {

    }

    handleClickNextMonth = () => {

    }
}
