import React from 'react';
import './todaySalesTile-style.css';
import { MajorButton } from '../../UI kit/majorButton/MajorButon';
import { AddIcon } from '../../icons/AddIcon';
import { PopUpTwoButtons } from '../../popups/PopUpTwoButtons/PopUpTwoButtons';
import { AddNewSale } from '../../popups/AddNewSale/AddNewSale';

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

		    	<table>
		    		<thead>
		    			<tr>
		    				<th className='number'>№</th>
		    				<th className='product-name'>Товар</th>
		    				<th className='price'>Цена</th>
		    				<th className='amount'>Кол-во</th>
		    				<th className='status'>Статус</th>
		    			</tr>
		    		</thead>
		    		<tbody>
		    			<tr>
		    				<td className='number'>1</td>
		    				<td className='product-name'>Haier BCFE625AWRU</td>
		    				<td className='price'>44 900 ₽</td>
		    				<td className='amount'>1</td>
		    				<td className='status'>
		    					<div className='indicator-icon confirm-icon'></div>
		    					<span className='status confirm'>подтверждена</span>
		    				</td>
		    			</tr>
		    			<tr>
		    				<td className='number'>2</td>
		    				<td className='product-name'>Haier BCFE625AWRU</td>
		    				<td className='price'>144 900 ₽</td>
		    				<td className='amount'>3</td>
		    				<td className='status'>
		    					<div className='indicator-icon reject-icon'></div>
		    					<span className='reject'> отклонена</span>
		    				</td>
		    			</tr>
		    		</tbody>
		    	</table>
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
