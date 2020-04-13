import React from 'react';
import './main-style.css';
import SalesStatisticsTile from './SalesStatisticsTile/SalesStatisticsTile';
import WorkingShiftTile from './WorkingShiftTile/WorkingShiftTile';
import MyTradingPointTile from './MyTradingPointTile/MyTradingPointTile';
import MyPeopleTile from './MyPeopleTile/MyPeopleTile';
import TodaySalesTile from './TodaySalesTile/TodaySalesTile';
import MyMonthlyIncomeTile from './MyMonthlyIncomeTile/MyMonthlyIncomeTile';
import NewSale from '../popups/NewSale/NewSale';
import { PopUpTwoButtons } from '../popups/PopUpTwoButtons/PopUpTwoButtons';
import { AddNewSale } from '../popups/AddNewSale/AddNewSale';
import { Table } from '../Tables/Table';
import { DatePickerCalendar } from '../UI kit/datePicker/datePickerCalendar/DatePickerCalendar';
import { MonthPicker } from '../UI kit/datePicker/MonthPicker/MonthPicker';
import { DatePicker } from '../UI kit/datePicker/DatePicker';

class Main extends React.Component {
	render() {
		return (
			<main>
				<div className='grid-wrapper'>
					<SalesStatisticsTile />

					<WorkingShiftTile />

					<MyTradingPointTile />

					<MyPeopleTile 
						title={"Мой координатор"} 
						fullName={"Петр Данилов"}
						tel={"+7 921 333 44 55"}
						email={"petyapetrov@mail.ru"}
					/>

					<MyPeopleTile 
						title={"Мой супервайзер"} 
						fullName={"Валерия Петрова"}
						tel={"+7 921 333 44 56"}
						email={"petrova@mail.ru"}
					/>

					<TodaySalesTile />

					<MyMonthlyIncomeTile />
				</div>
				<NewSale />
				

				<DatePicker />
				

			</main>
		);
	}
}

export default Main;