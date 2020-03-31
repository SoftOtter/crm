import React from 'react';
import './todaySalesTile-style.css';
import Button from '../../UI kit/button/Button';
import PlusInCircleIcon from '../../icons/PlusInCircleIcon';

class TodaySalesTile extends React.Component {
    render() {
        return (
            <div className='tiles todays-sales'>
				<div className='tables-header'>
					<h2 className='tables-title'>Продажи сегодня</h2>
					<Button type={'filled'} className='btn-add-sales'>
						<PlusInCircleIcon />
						<span>Добавить продажу</span>
					</Button>
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
}

export default TodaySalesTile;
