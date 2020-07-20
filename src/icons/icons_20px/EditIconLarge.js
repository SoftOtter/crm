import React from 'react';

export class EditIconLarge extends React.Component {
    render() {
        const {children, ...restProps} = this.props;
        return (
            <svg 
                width="24" 
                height="24" 
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                {...restProps}
            >
                <path d="M19.5 6L15.3 1.8L4.80004 12.15L3.60004 17.7C5.40004 17.25 7.20004 16.95 9.00004 16.5L19.5 6ZM17.4 6L16.2 7.2L13.95 5.25L15.3 4.05L17.4 6ZM12.9 6.3L15 8.55L9.15004 14.25L6.90004 12.15L12.9 6.3Z" />
                <path d="M21 20.7H3V22.2H21V20.7Z" />
            </svg>


        );
    }
}
