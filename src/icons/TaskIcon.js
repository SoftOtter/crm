import React from 'react';

class TaskIcon extends React.Component {
    render() {
        return (
            <svg 
                width="16" 
                height="16" 
                viewBox="0 0 16 16" 
                xmlns="http://www.w3.org/2000/svg"
                className={this.props.className}
            >
                <path d="M13.5 2H1.5C0.9 2 0.5 2.4 0.5 3V13C0.5 13.6 0.9 14 1.5 14H9.9C9.9 13.7 9.9 13.3 9.9 13H1.5V3H13.5V8.6C13.9 8.8 14.2 9 14.5 9.4V3C14.5 2.4 14.1 2 13.5 2Z"  />
                <path d="M3.5 1H2.5V4H3.5V1Z"  />
                <path d="M13.5 5H1.5V6H13.5V5Z" fill="white"/>
                <path d="M13.5 5H1.5V6H13.5V5Z"  />
                <path d="M12.5 1H11.5V4H12.5V1Z"  />
                <path d="M3.5 7H2.5V8H3.5V7Z" fill="white"/>
                <path d="M3.5 7H2.5V8H3.5V7Z"  />
                <path d="M3.5 9H2.5V10H3.5V9Z" fill="white"/>
                <path d="M3.5 9H2.5V10H3.5V9Z"  />
                <path d="M3.5 11H2.5V12H3.5V11Z" fill="white"/>
                <path d="M3.5 11H2.5V12H3.5V11Z"  />
                <path d="M5.5 7H4.5V8H5.5V7Z" fill="white"/>
                <path d="M5.5 7H4.5V8H5.5V7Z"  />
                <path d="M5.5 9H4.5V10H5.5V9Z" fill="white"/>
                <path d="M5.5 9H4.5V10H5.5V9Z"  />
                <path d="M5.5 11H4.5V12H5.5V11Z" fill="white"/>
                <path d="M5.5 11H4.5V12H5.5V11Z"  />
                <path d="M7.5 7H6.5V8H7.5V7Z" fill="white"/>
                <path d="M7.5 7H6.5V8H7.5V7Z"  />
                <path d="M9.5 7H8.5V8H9.5V7Z" fill="white"/>
                <path d="M9.5 7H8.5V8H9.5V7Z"  />
                <path d="M7.5 9H6.5V10H7.5V9Z" fill="white"/>
                <path d="M7.5 9H6.5V10H7.5V9Z"  />
                <path d="M7.5 11H6.5V12H7.5V11Z" fill="white"/>
                <path d="M7.5 11H6.5V12H7.5V11Z"  />
                <path d="M12 9C13.4 9 14.5 10.1 14.5 11.5C14.5 12.9 13.4 14 12 14C10.6 14 9.5 12.9 9.5 11.5C9.5 10.1 10.6 9 12 9ZM12 8C10.1 8 8.5 9.6 8.5 11.5C8.5 13.4 10.1 15 12 15C13.9 15 15.5 13.4 15.5 11.5C15.5 9.6 13.9 8 12 8Z"  />
                <path d="M12.6 12.9L11.5 11.7V10H12.5V11.3L13.4 12.1L12.6 12.9Z"  />
            </svg>

        );
    }
}

export default TaskIcon;
