import React from 'react';

export class WideArrowUp extends React.Component {
    render() {
        const {children, ...restProps} = this.props;
        return (
            <svg 
                width="64" 
                height="18" 
                viewBox="0 0 64 18" 
                xmlns="http://www.w3.org/2000/svg"
                {...restProps}
            >
                <g>
                    <path d="M12.7274 14.3635L30.9096 0.727207C31.5561 0.242407 32.445 0.242407 33.0914 0.727207L51.2726 14.3635C52.0759 14.966 52.2388 16.1057 51.6363 16.9089C51.279 17.3853 50.7331 17.6363 50.1803 17.6363C49.8007 17.6363 49.4178 17.5178 49.0908 17.2726L32.0004 4.45451L14.9092 17.2726C14.1057 17.8752 12.9662 17.7122 12.3637 16.9089C11.7612 16.1057 11.9241 14.966 12.7274 14.3635Z" />
                </g>
            </svg>
        );
    }
}
