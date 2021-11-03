import React from 'react';

export class DialogCornerLeftIcon extends React.Component {
    render() {
        const {children, ...restProps} = this.props;
        return (
            <svg 
                width="12" 
                height="11" 
                viewBox="0 0 12 11"
                xmlns="http://www.w3.org/2000/svg"
                {...restProps}
            >
                <path d="M0 11C3.5 9 7 6 7 0.5H12V11H0Z"/>
            </svg>
        );
    }
}
