import React from 'react';
import { Svg } from './Svg/Svg';

export class CalendarIcon extends React.Component {
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
                <path d="M14 4V14H2V4H14ZM14 3H2C1.4 3 1 3.4 1 4V14C1 14.6 1.4 15 2 15H14C14.6 15 15 14.6 15 14V4C15 3.4 14.6 3 14 3Z" />
                <path d="M4 2H3V5H4V2Z" />
                <path d="M14 6H2V7H14V6Z" />
                <path d="M13 2H12V5H13V2Z" />
                <path d="M4 8H3V9H4V8Z" />
                <path d="M4 10H3V11H4V10Z" />
                <path d="M4 12H3V13H4V12Z" />
                <path d="M6 8H5V9H6V8Z" />
                <path d="M6 10H5V11H6V10Z" />
                <path d="M6 12H5V13H6V12Z" />
                <path d="M8 8H7V9H8V8Z" />
                <path d="M8 10H7V11H8V10Z" />
                <path d="M8 12H7V13H8V12Z" />
                <path d="M10 8H9V9H10V8Z" />
                <path d="M10 10H9V11H10V10Z" />
                <path d="M10 12H9V13H10V12Z" />
                <path d="M12 8H11V9H12V8Z" />
                <path d="M12 10H11V11H12V10Z" />
            </svg>
        );
    }
}

