import React from 'react';
import { Svg } from './Svg/Svg';

export class ArrowLeftIcon extends React.Component {
    render() {
        const {children, ...restProps} = this.props;
        return (
            <svg
                version="1.1"
                width="16" 
                height="16"
                id="Слой_1" 
                xmlns="http://www.w3.org/2000/svg" 
                xmlnsXlink="http://www.w3.org/1999/xlink" 
                viewBox="0 0 16 16"
                xmlSpace="preserve"
                {...restProps}
            >
                <g>
                	<polygon points="6.3,8.1 11.1,12.9 10.4,13.7 4.8,8.1 4.9,8 5.6,7.3 10.4,2.3 11.2,3 	"/>
                </g>
            </svg>
        );
    }
}
