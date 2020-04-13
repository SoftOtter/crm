import React from 'react';
import './todaySalesTile-style.css';
import { MajorButton } from '../../UI kit/majorButton/MajorButon';
import { AddIcon } from '../../icons/AddIcon';
import { AddNewSale } from '../../popups/AddNewSale/AddNewSale';
import { Table } from '../../Tables/Table';
import { dataForSalesTileTableHeader } from '../../data/dataForSalesTileTableHeader';
import { dataSales } from '../../data/dataSales';

class TodaySalesTile extends React.Component {
	constructor (props) {
		super (props);

		this.state = {
			isPopUpOpen: false
		}
	}
    render() {
        return (
            <div className='tiles todays-sales'>
				<div className='tables-header'>
					<h2 className='tables-title'>Продажи сегодня</h2>
					<MajorButton
						buttonText = {'Добавить продажу'}
						className={'TodaySalesTile__ButtonAddSale'}
						icon={<AddIcon className={'TodaySalesTile__ButtonAddSaleIcon'}/>}
						onClick={this.handleClickAddSale}
                	/>

					<AddNewSale
						isOpen={this.state.isPopUpOpen}
						closePopUp={this.closePopUp}
					/>

				</div>

		    	<Table 
					dataForTableHeader={dataForSalesTileTableHeader}
					dataForTableBody={dataSales}
                    maxRows={2}
				/>
		    </div>
        );
	}
	
	handleClickAddSale = () => {
		this.setState({
			isPopUpOpen: true
		})
	}

	closePopUp = () => {
		this.setState({
			isPopUpOpen: false
		})
	}

}

export default TodaySalesTile;
