import React from 'react';

class ErrorIcon extends React.Component {
    render() {
        return (
            <svg 
                width="16" 
                height="16" 
                viewBox="0 0 16 16" 
                xmlns="http://www.w3.org/2000/svg"
                className={this.props.className}
            >
                <path d="M8 15.8775C3.65625 15.8775 0.122559 12.3433 0.122559 8.00008C0.122559 3.65633 3.65625 0.122147 8 0.122147C12.3438 0.122147 15.8779 3.65633 15.8779 8.00008C15.8779 12.3433 12.3438 15.8775 8 15.8775ZM8 1.12215C4.20801 1.12215 1.12256 4.2076 1.12256 8.00008C1.12256 11.7926 4.20801 14.8775 8 14.8775C11.793 14.8775 14.8779 11.7926 14.8779 8.00008C14.8779 4.2076 11.793 1.12215 8 1.12215Z" />
                <rect x="7" y="3" width="2" height="7" rx="1" />
                <rect x="7" y="11" width="2" height="2" rx="1" />
            </svg>
        );
    }
}

export default ErrorIcon;
