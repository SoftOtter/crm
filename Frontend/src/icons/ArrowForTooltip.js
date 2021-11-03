import React from 'react';
import { Svg } from './Svg/Svg';

export class ArrowForTooltip extends React.Component {
    render() {
        const {children, ...restProps} = this.props;
        return (
            <svg
                width="10" 
                height="6" 
                viewBox="0 0 10 6"
                xmlns="http://www.w3.org/2000/svg"
                {...restProps}
            >
                <path d="M5 0L10 6H0L5 0Z"/>
            </svg>
        );
    }
}
