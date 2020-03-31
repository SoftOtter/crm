import React from 'react';
import './salesStatisticsTile-style.css';
import { SalesStatisticButton } from '../../icons/SalesStatisticButton';
import ButtonIcon from '../../UI kit/buttonIcon/ButtonIcon';
import { ButtonWithIcon } from '../../UI kit/buttonWithIcon/ButtonWithIcon';
import { CalendarIcon } from '../../icons/CalendarIcon';

class SalesStatisticsTile extends React.Component {
	render() {
		return (
			<div className='tiles sales-statistics'>
				<div className='tiles-header'>
					<h2 className='tiles-title'>Статистика продаж</h2>

					<ButtonIcon
						className = {'SalesStatisticsTile-button'}
                		icon = {<SalesStatisticButton className={'iconForButton'}/>}
                		textForTooltip = {'???'}
                	/>
				</div>

				<div className='devider'></div>

				<div className='sales-statistics-content'>
					<div className='periods'>
						<div className='periods-wrapper wrapper-for-media'>
							<ButtonWithIcon
								className='btn-periods'
								buttonText = {'Неделя'}
							/>
							<ButtonWithIcon
								className='btn-periods'
								buttonText = {'Месяц'}
							/>
							<ButtonWithIcon
								className='btn-periods'
								buttonText = {'Квартал'}
							/>
							<ButtonWithIcon
								className='btn-periods'
								buttonText = {'Год'}
							/>
							<ButtonWithIcon
								className='btn-periods'
								buttonText = {'За все время'}
							/>
						</div>

					<div className='periodButton-wrapper'>
						<ButtonWithIcon
							icon = {<CalendarIcon className={'iconForBtnWithIcon'}/>}
							buttonText = {'Период'}
							className={'periodButton'}
						/>
					</div>
				</div>

					<div className='diagram'>Here may be your diagram! ;D</div>
					<div className='btn-detailed-container'>
						<ButtonWithIcon
							buttonText = {'Подробнее'}
							className={'btn-detailed'}
						/>
					</div>
				</div>
			</div>

		);
	}
}

export default SalesStatisticsTile;
