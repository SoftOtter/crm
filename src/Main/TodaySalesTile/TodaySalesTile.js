import React from 'react';
import './todaySalesTile-style.css';
import Button from '../Button/Button';

class TodaySalesTile extends React.Component {
    render() {
        return (
            <div className='tiles todays-sales'>
				<div className='tables-header'>
					<h2 className='tables-title'>Продажи сегодня</h2>
					<Button type={'filled'} className='btn-add-sales'>
						<svg version="1.1" id="Слой_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
							viewBox="0 0 16 16" xmlSpace="preserve">
						<g>
							<path d="M8,0C3.5,0,0,3.5,0,8s3.5,8,8,8s8-3.5,8-8S12.5,0,8,0z M8,14.9c-3.8,0-6.9-3.1-6.9-6.9S4.2,1.1,8,1.1s6.9,3.1,6.9,6.9
								S11.8,14.9,8,14.9z"/>
							<polygon points="8.6,3.4 7.4,3.4 7.4,7.4 3.4,7.4 3.4,8.6 7.4,8.6 7.4,12.6 8.6,12.6 8.6,8.6 12.6,8.6 12.6,7.4 8.6,7.4 	"/>
						</g>
						</svg>
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
