import React from 'react';

export class TickIcon extends React.Component {
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
                <path d="M2.79999 10.1946L6.59999 12.7946" />
                <path d="M13.2 4.59459L6.59998 12.7946" />
            </svg>
        );
    }
}
