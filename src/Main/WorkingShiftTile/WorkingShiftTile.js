import React from 'react';
import MoreInfoIcon from '../icons/MoreInfoIcon';
import Button from '../Button/Button';
import './style.css';

class WorkingShiftTile extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			arrivingTime: null,
			arrivingTimeDiff: null,
			leavingTime: null,
			leavingTimeDiff: null,
			buttonLabel: 'Начать смену'
		};
	}

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

				{/* On 994px formatting brokes */}
				<div className='working-shift-content'>
					{this.renderArrivingTime()}
					{this.renderLeavingTime()}
				</div>

				<Button className={'WorkingShiftTile__Button'} type={'filled'} onClick={this.handleClick}>
					{this.state.buttonLabel}
				</Button>
			</div>

		);
	}

	renderArrivingTime() {
		let classes = 'time-container arriving';
		if (this.state.arrivingTime === null) {
			classes += ' disabled';
		}
		return (
			<div className={classes}>
				<span className='time-label'>Пришел </span>
				{(this.state.arrivingTime && this.state.arrivingTimeDiff) &&
					<span className='lateness'>{this.state.arrivingTimeDiff}</span>
				}
				<br/>
				<span className='time'>{this.state.arrivingTime || '10:00'}</span>
			</div>
		);
	}

	renderLeavingTime() {
		let classes = 'time-container leaving';
		if (this.state.leavingTime === null) {
			classes += ' disabled';
		}
		return (
			<div className={classes}>
				<span className='time-label'>Ушел </span>
				{(this.state.leavingTime && this.state.leavingTimeDiff) &&
					<span className='lateness'>{this.state.leavingTimeDiff}</span>
				}
				<br/>
				<span className='time'>{this.state.leavingTime || '17:00'}</span>
			</div>
		);
	}

	handleClick = () => {
		if (this.state.arrivingTime === null && this.state.leavingTime === null) {
			const result = this.workingShiftCalc(10);
			this.setState({
				arrivingTime: result.time,
				arrivingTimeDiff: result.resultDiff,
				buttonLabel: 'Закончить смену'
			});
		} else if (this.state.leavingTime === null) {
			const { time, resultDiff } = this.workingShiftCalc(17);
			this.setState({
				leavingTime: time,
				leavingTimeDiff: resultDiff,
				buttonLabel: 'Сброс'
			});
		} else {
			this.setState({
				arrivingTime: null,
				arrivingTimeDiff: null,
				leavingTime: null,
				leavingTimeDiff: null,
				buttonLabel: 'Начать смену'
			});
		}
		
	}

	workingShiftCalc = (baseHour) => {
		const currentTime = new Date();
		let resultDiff = '';
		// Think about 10:30
		if (currentTime.getHours() < baseHour) {
			const diffHours = (baseHour - 1) - currentTime.getHours();
			const diffMinutes = 60 - currentTime.getMinutes();
			if (diffHours === 0) {
				resultDiff = '-' + diffMinutes;
			} else {
				resultDiff = `-${diffHours}ч\xa0${diffMinutes}м`;
			}
		} else {
			const diffHours = currentTime.getHours() - baseHour;
			const diffMinutes = currentTime.getMinutes();
			if (diffHours === 0) {
				if (diffMinutes === 0) {
					resultDiff = '';
				} else {
					resultDiff = '+' + diffMinutes;
				}
			} else {
				resultDiff = `+${diffHours}ч\xa0${diffMinutes}м`;
			}
		}

		const minutes = currentTime.getMinutes() < 10
			? '0' + currentTime.getMinutes()
			: currentTime.getMinutes();
		let time = currentTime.getHours() + ':' + minutes;

		return { resultDiff, time };
	}
}

export default WorkingShiftTile;
