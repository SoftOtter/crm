import React from 'react';
import { Svg } from './Svg/Svg';

export class AddIcon extends React.Component {
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
                <path d="M8 0C3.5 0 0 3.5 0 8C0 12.5 3.5 16 8 16C12.5 16 16 12.5 16 8C16 3.5 12.5 0 8 0ZM8 14.9C4.2 14.9 1.1 11.8 1.1 8C1.1 4.2 4.2 1.1 8 1.1C11.8 1.1 14.9 4.2 14.9 8C14.9 11.8 11.8 14.9 8 14.9Z" />
                <path d="M8.59999 3.4H7.39999V7.4H3.39999V8.6H7.39999V12.6H8.59999V8.6H12.6V7.4H8.59999V3.4Z" />
            </svg>
        );
    }
}
