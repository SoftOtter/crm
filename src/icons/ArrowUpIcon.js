import React from 'react';

class ArrowUpIcon extends React.Component {
    render() {
        return (
            <svg 
                width="16"
                height="16"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
                className={this.props.className}
            >
                <path d="M7.90001 6.29999L3.10001 11.1L2.30001 10.4L7.90001 4.79999L8.00001 4.89999L8.70001 5.59999L13.7 10.4L13 11.2L7.90001 6.29999Z" />
            </svg>
        );
    }
}

export default ArrowUpIcon;
