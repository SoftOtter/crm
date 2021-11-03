import React from 'react';

export class DialogCornerRightIcon extends React.Component {
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
                <path d="M12 11C8.5 9 5 6 5 0.5H0V11H12Z"/>
            </svg>
        );
    }
}
