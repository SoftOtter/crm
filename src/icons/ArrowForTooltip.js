import React from 'react';

class ArrowForTooltip extends React.Component {
    render() {
        return (
            <svg 
                width="10" 
                height="6" 
                viewBox="0 0 10 6"
                xmlns="http://www.w3.org/2000/svg"
                className={this.props.className}
            >
                <path d="M5 0L10 6H0L5 0Z"/>
            </svg>
        );
    }
}

export default ArrowForTooltip;
