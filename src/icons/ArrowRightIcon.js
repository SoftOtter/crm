import React from 'react';

export class ArrowRightIcon extends React.Component {
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
                <path d="M9.70001 7.9L4.90001 3.1L5.60001 2.3L11.2 7.9L11.1 8L10.4 8.7L5.60001 13.7L4.80001 13L9.70001 7.9Z" />
            </svg>
        );
    }
}
