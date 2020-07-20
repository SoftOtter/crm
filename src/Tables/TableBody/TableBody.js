import React from 'react';
import './tableBody-style.css'
import { currencyCodeConverter } from '../../converters/currencyCodeConverter';
import { numberFormatConverter } from '../../converters/numberFormatConverter';

export class TableBody extends React.Component {
    render() {
        const rows = this.props.dataForTableBody.map(
            (x, index) => {
                if (index >= this.props.maxRows) {
                    return null;
                }
                return (
                    <tr 
                        key={x.id}
                        className={'TableBody__row'}
                    
                    >
                        <td className='TableBody__cell'>{x.id}</td>
                        <td className='TableBody__cell'>{x.productName}</td>
                        <td className='TableBody__cell'>
                            {numberFormatConverter(x.price)}
                            {' '}
                            {currencyCodeConverter(x.currency)}
                        </td>
                        <td className='TableBody__cell'>{x.amount}</td>
                        <td className='TableBody__cell'>{this.renderStatus(x.status)}</td>
                    </tr>
                )
            }
        )
        return (
            <tbody className={'TableBody'}>
                {rows}
            </tbody>
        );
    }

    renderStatus = (status) => {
        let colorClass = '';
        let statusText = '';
        const reject = 0;
        const inProgress = 1;
        const confirm = 2;

        if (status === reject) {
            colorClass = 'TableBody__statusText-red';
            statusText = 'отклонена';
        } else if (status === inProgress) {
            colorClass = 'TableBody__statusText-yellow';
            statusText = 'проверяется';
        } else if (status === confirm) {
            colorClass = 'TableBody__statusText-green';
            statusText = 'подтверждена';
        }

        return <div className={'TableBody__status'}>
            <div className={'TableBody__statusIndicator ' + colorClass} />
            <span className={'TableBody__statusText ' + colorClass}>{statusText}</span>
        </div>
    }
}
