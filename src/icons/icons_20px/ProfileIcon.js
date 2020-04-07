import React from 'react';
import { Svg } from '../Svg/Svg';

export class ProfileIcon extends React.Component {
    render() {
        const {children, ...restProps} = this.props;
        return (
            <svg
                width="20" 
                height="20" 
                viewBox="0 0 20 20" 
                xmlns="http://www.w3.org/2000/svg"
                {...restProps}
            >
                <path d="M9.99999 10.6C13.1 10.6 15.7 13.5 16.3 17.6H3.69999C4.29999 13.6 6.89999 10.6 9.99999 10.6ZM9.99999 9.60001C6.09999 9.60001 2.89999 13.5 2.39999 18.6H17.4C17.1 13.6 13.9 9.60001 9.99999 9.60001Z" />
                <path d="M9.99999 2.5C11.5 2.5 12.7 3.7 12.7 5.2C12.7 6.7 11.5 7.9 9.99999 7.9C8.49999 7.9 7.29999 6.7 7.29999 5.2C7.29999 3.7 8.49999 2.5 9.99999 2.5ZM9.99999 1.5C7.89999 1.5 6.29999 3.2 6.29999 5.2C6.29999 7.2 7.89999 8.9 9.99999 8.9C12.1 8.9 13.7 7.2 13.7 5.2C13.7 3.2 12.1 1.5 9.99999 1.5Z" />
            </svg>
        );
    }
}
