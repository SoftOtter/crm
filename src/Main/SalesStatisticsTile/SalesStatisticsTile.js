import React from 'react';
import CalendarIcon from './icons/CalendarIcon';
import './salesStatisticsTile-style.css';

class SalesStatisticsTile extends React.Component {
	render() {
		return (
			<div className='tiles sales-statistics'>
				<div className='tiles-header'>
					<h2 className='tiles-title'>Статистика продаж</h2>
					<button className='btn-sales-statistics'>
						<div className='sales-statistics-icon'></div>
					</button>
				</div>

				<div className='devider'></div>

				<div className='sales-statistics-content'>
					<div className='periods'>
						<div className='periods-wrapper wrapper-for-media'>
							<button className='btn-periods'>Неделя</button>
							<button className='btn-periods'>Месяц</button>
							<button className='btn-periods'>Квартал</button>
							<button className='btn-periods'>Год</button>
							<button className='btn-periods'>За все время</button>
						</div>

					<div className='periods-wrapper'>
						<button className='btn-periods btn-periods-calendar'>
							<CalendarIcon />
							<span>Период</span>
						</button>
					</div>
				</div>

					<div className='diagram'>Here may be your diagram! ;D</div>
					<div className='btn-detailed-container'>
						<button className='btn-detailed'>Подробнее</button>
					</div>
				</div>
			</div>

		);
	}
}

export default SalesStatisticsTile;
