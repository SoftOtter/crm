import React from 'react';
import './myMonthlyIncomeTile-style.css';

class MyMonthlyIncomeTile extends React.Component {
    render() {
        return (
            <div className='tiles my-monthly-income'>
				<div className='tiles-header'>
					<h2 className='tiles-title'>Мой доход в этом месяце</h2>
				</div>
				<span className='total-income'>54 783 ₽</span>
				<p className='additional-info description'>Рассчитанно системой по подтвержденным данным. Точная сумма утверждается в конце месяца.</p>
			</div>
        );
    }
}

export default MyMonthlyIncomeTile;
