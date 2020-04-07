import React from 'react';
import { Svg } from './Svg/Svg';

export class DeleteIcon extends React.Component {
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
                <path d="M3.8 3.8C6.1 1.5 10 1.5 12.3 3.8C14.6 6.1 14.6 10 12.3 12.3C10 14.6 6.1 14.6 3.8 12.3C1.5 10 1.4 6.1 3.8 3.8ZM3.1 3.1C0.3 5.9 0.3 10.2 3.1 13C5.9 15.8 10.2 15.8 13 13C15.8 10.2 15.8 5.9 13 3.1C10.2 0.3 5.8 0.3 3.1 3.1Z" />
                <path d="M5.5 4.8L4.8 5.5L10.5 11.2L11.2 10.5L5.5 4.8Z" />
                <path d="M10.5 4.8L4.8 10.5L5.5 11.2L11.2 5.5L10.5 4.8Z" />
            </svg>
        );
    }
}
