import React from 'react';
import './style.css';

class MyTradingPointTile extends React.Component {
    render() {
        return (
            <div className='tiles my-trading-point'>
				<div className='tiles-header'>
					<h2 className='tiles-title'>Моя торговая точка</h2>
				</div>
				
				<div className='trading-logo-container'>
					<img className='trading-logo' src='img/TT-logo.png' alt='' />
				</div>
				<span className='trading-name'>РБТ 120</span>
				<span className='address'>Москва <br/> пр.Андропова 22</span>
			</div>
        );
    }
}

export default MyTradingPointTile;
