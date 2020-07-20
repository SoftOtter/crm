import React from 'react';

export class EditIcon extends React.Component {
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
                <path d="M13 4L10.2 1.2L3.19999 8.1L2.39999 11.8C3.59999 11.5 4.79999 11.3 5.99999 11L13 4ZM11.6 4L10.8 4.8L9.29999 3.5L10.2 2.7L11.6 4ZM8.59999 4.2L9.99999 5.7L6.09999 9.5L4.59999 8.1L8.59999 4.2Z"/>
                <path d="M14 13.8H2V14.8H14V13.8Z"/>
            </svg>
        );
    }
}
