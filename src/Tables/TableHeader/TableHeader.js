import React from 'react';
import './tableHeader-style.css'

export class TableHeader extends React.Component {
    render() {
        const headers = this.props.dataForTableHeader.map (
            x => 
                <th 
                    key={x.id}
                    className={'TableHeader__cell'}
                    style={{
                        width: x.width,
                        textAlign: x.textAlign,
                    }}
                >
                    {x.header}
                </th>
        )
        return (
            <thead className={'TableHeader'}>
		    	<tr className={'TableHeader__row'}>
		    		{headers}
		    	</tr>
		    </thead>
        );
    }
}
