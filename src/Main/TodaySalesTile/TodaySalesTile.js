import React from 'react';
import './todaySalesTile-style.css';
import { MajorButton } from '../../UI kit/majorButton/MajorButon';
import { AddIcon } from '../../icons/AddIcon';
import { PopUpTwoButtons } from '../../popups/PopUpTwoButtons/PopUpTwoButtons';

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

					<PopUpTwoButtons
						header={'Заголовок'}
						cancelButtonTitle={'Отмена'}
						submitButtonTitle={'Добавить'}
						isOpen={this.state.isPopUpOpen}
						closePopUp={this.closePopUp}
					>
						{/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p> */}
					</PopUpTwoButtons>

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
