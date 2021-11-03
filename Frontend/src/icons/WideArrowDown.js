import React from 'react';

export class WideArrowDown extends React.Component {
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
                    <path d="M12.7274 3.63649L30.9096 17.2728C31.5561 17.7576 32.445 17.7576 33.0914 17.2728L51.2726 3.63649C52.0759 3.03395 52.2388 1.89432 51.6363 1.09105C51.279 0.614694 50.7331 0.363665 50.1803 0.363665C49.8007 0.363664 49.4178 0.48221 49.0908 0.727421L32.0004 13.5455L14.9092 0.727418C14.1057 0.124755 12.9662 0.287784 12.3637 1.09105C11.7612 1.89432 11.9241 3.03395 12.7274 3.63649Z" />
                </g>
            </svg>

        );
    }
}
