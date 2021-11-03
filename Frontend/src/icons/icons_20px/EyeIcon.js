import React from 'react';

export class EyeIcon extends React.Component {
    render() {
        const {children, ...restProps} = this.props;
        return (
            <svg 
                width="24" 
                height="17" 
                viewBox="0 0 24 17" 
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                {...restProps}
            >
                <path d="M1 8.50005C4.5 -1.5 19.5 -1.5 23 8.50005C19.5 18.5 4.5 18.5 1 8.50005Z" stroke="currentColor" strokeWidth="1.5"/>
                <circle cx="12" cy="8.5" r="2.5" fill="currentColor"/>
                <path d="M7.5 8.50001C7.5 2.5 16.5 2.49998 16.5 8.50001C16.5 14.5 7.5 14.5 7.5 8.50001Z" stroke="currentColor"/>
            </svg>
        );
    }
}
