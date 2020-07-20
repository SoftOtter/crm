import React from 'react';
import classNames from 'classnames';
import { ButtonIcon } from '../../buttonIcon/ButtonIcon';
import { ArrowLeftIcon } from '../../../icons/ArrowLeftIcon';
import { ArrowRightIcon } from '../../../icons/ArrowRightIcon';
import './monthPickerForRange-style.css'

export class MonthPickerForRange extends React.Component {
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
            <div className={'MonthPickerForRange'}>
                <div className={'MonthPickerForRange__buttonWrapper MonthPickerForRange__buttonWrapperPrev'}> 
                    {this.props.prevButton &&
                        <ButtonIcon
                            className={
                                classNames(
                                    'MonthPickerForRange__switchMonthBtnWrapper MonthPickerForRange__PrevMonth',
                                    this.props.classes.marginLeft
                                )
                            }
                            icon = {
                                <ArrowLeftIcon
                                    className={'MonthPickerForRange__arrowIcon MonthPickerForRange__arrowIconLeft iconForButton'}
                                />
                            }
                            classes={{
                                btnSize: 'MonthPickerForRange__switchMonthButton'
                            }}
                            onClick={this.handleClickPrevMonth}
                        />
                    }
                </div>

                <div className={'MonthPickerForRange__selectedMonth'}>
                    <p className={'MonthPickerForRange__selectedMonthText'}>
                        {MonthPickerForRange.months[this.props.shownMonth] + ' ' + this.props.shownYear}
                        
                    </p>
                </div>

                <div className={'MonthPickerForRange__buttonWrapper MonthPickerForRange__buttonWrapperNext'}>
                    {this.props.nextButton &&
                        <ButtonIcon
                            className={classNames(
                                'MonthPickerForRange__switchMonthBtnWrapper MonthPickerForRange__NextMonth', 
                                this.props.classes.marginRight
                            )}
                            icon={
                                <ArrowRightIcon
                                    className={'MonthPickerForRange__arrowIcon MonthPickerForRange__arrowIconRight iconForButton'}
                                />
                            }
                            classes={{
                                btnSize: 'MonthPickerForRange__switchMonthButton'
                            }}
                            onClick={this.handleClickNextMonth}
                        />
                    }
                </div>
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
