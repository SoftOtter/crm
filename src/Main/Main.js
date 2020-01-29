import React from 'react';
import './style.css';
import MoreInfoIcon from './icons/MoreInfoIcon';
import SalesStatisticsTile from './SalesStatisticsTile/SalesStatisticsTile';
import WorkingShiftTile from './WorkingShiftTile/WorkingShiftTile';
import MyTradingPointTile from './MyTradingPointTile/MyTradingPointTile';
import MyPeopleTile from './MyPeopleTile/MyPeopleTile';
import TodaySalesTile from './TodaySalesTile/TodaySalesTile';
import MyMonthlyIncomeTile from './MyMonthlyIncomeTile/MyMonthlyIncomeTile';

class Main extends React.Component {
    render() {
        return (
            <main>
				<div className='grid-wrapper'>
					<SalesStatisticsTile />

					<WorkingShiftTile />

					<MyTradingPointTile />

					<MyPeopleTile />

					<div className='tiles my-people supervisor'>
						<div className='tiles-header'>
							<h2 className='tiles-title'>Мой супервайзер</h2>
							<button className='btn-more'>
								<div className='more-info-icon'>
                                    <MoreInfoIcon />
								</div>
							</button>
						</div>
						<div className='content'>
							<div className='user-icon-container'>
								<img className='user-icon' src='#' alt=''/>
							</div>
							<span className='full-name'>Валерия Петрова</span>
							<span className='additional-info tel'>+7 921 333 44 55</span>
							<span className='additional-info email'>petrova@mail.ru</span>
						</div>
					</div>

					<TodaySalesTile />

					<MyMonthlyIncomeTile />
				</div>
			</main>
        );
    }
}

export default Main;