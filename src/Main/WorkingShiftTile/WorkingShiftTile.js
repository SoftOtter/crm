import React from 'react';
import MoreInfoIcon from '../icons/MoreInfoIcon';
import './style.css';

class WorkingShiftTile extends React.Component {
    render() {
        return (
            <div className='tiles working-shift'>
				<div className='tiles-header'>
					<h2 className='tiles-title'>Смена с 10:00 до 17:00</h2>
					<button className='btn-more'>
						<div className='more-info-icon'>
							<MoreInfoIcon />
						</div>
					</button>
				</div>

				<div className='working-shift-content'>
					<div className='time-container arriving'>
						<span className='time-label'>Пришел</span>
						<span className='lateness'>+2</span>
						<br/>
						<span className='time'>10:02</span>
					</div>
					<div className='time-container leaving disabled'>
						<span className='time-label '>Ушел</span>
						<br/>
						<span className='time'>17:00</span>
					</div>
				</div>

				<button className='btn-working-shift'>Закончить смену</button>
			</div>

        );
    }
}

export default WorkingShiftTile;
