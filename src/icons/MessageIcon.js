import React from 'react';
import { Svg } from './Svg/Svg';

export class MessageIcon extends React.Component {
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
                <path d="M14.4 4V12H2.4V4H14.4ZM14.4 3H2.4C1.8 3 1.4 3.4 1.4 4V12C1.4 12.6 1.8 13 2.4 13H14.4C15 13 15.4 12.6 15.4 12V4C15.4 3.4 15 3 14.4 3Z" />
                <path d="M8.4 8.6L2.1 4.4L2.7 3.6L8.4 7.4L14.1 3.6L14.7 4.4L8.4 8.6Z" />
                <path d="M6.95012 6.72259L1.94932 11.6205L2.64902 12.3349L7.64982 7.43699L6.95012 6.72259Z" />
                <path d="M9.92586 6.71546L9.21876 7.42256L14.0978 12.3016L14.8049 11.5945L9.92586 6.71546Z" />
            </svg>
        );
    }
}