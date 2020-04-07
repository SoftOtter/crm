
import React from 'react';
import { Svg } from './Svg/Svg';

export class ArrowDownIcon extends React.Component {
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
                <path d="M8.09999 9.70001L12.9 4.90001L13.7 5.60001L8.09999 11.2L7.99999 11.1L7.29999 10.4L2.29999 5.60001L2.99999 4.80001L8.09999 9.70001Z" />
            </svg>
        );
    }
}