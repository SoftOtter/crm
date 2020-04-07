import React from 'react';
import { Svg } from '../Svg/Svg';

export class SalesIcon extends React.Component {
    render() {
        const {children, ...restProps} = this.props;
        return (
            <svg
                version="1.1" 
                id="Слой_1" 
                xmlns="http://www.w3.org/2000/svg" 
                xmlnsXlink="http://www.w3.org/1999/xlink" 
                x="0px" 
                y="0px"
                viewBox="0 0 20 20" 
                xmlSpace="preserve"
                {...restProps}
            >
                <rect x="1" y="4" width="1" height="15"/>
                <rect x="1" y="18" width="18" height="1"/>
                <g>
                    <path d="M6,12v3H5v-3H6 M7,11H4v5h3V11L7,11z"/>
                </g>
                <g>
                    <path d="M11,10v5h-1v-5H11 M12,9H9v7h3V9L12,9z"/>
                </g>
                <g>
                    <path d="M16,8v7h-1V8H16 M17,7h-3v9h3V7L17,7z"/>
                </g>
                <polyline className="st0" points="4,9 10,4 12,6 17,1 "/>
            </svg>
        );
    }
}
