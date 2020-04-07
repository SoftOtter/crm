import React from 'react';
import { Svg } from './Svg/Svg';

export class SalesStatisticButton extends React.Component {
    render() {
        const {children, ...restProps} = this.props;
        return (
            <svg
                width="16" 
                height="16" 
                viewBox="0 0 16 16" 
                xmlns="http://www.w3.org/2000/svg"
                {...restProps}
            >
                <rect x="11" y="3" width="2" height="13" />
                <rect x="7" y="6" width="2" height="10" />
                <rect x="3" y="9" width="2" height="7" />
            </svg>
        );
    }
}
