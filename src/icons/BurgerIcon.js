import React from 'react';
import { Svg } from './Svg/Svg';

export class BurgerIcon extends React.Component {
    render() {
        const {children, ...restProps} = this.props;
        return (
            <svg
                version="1.1"
                id="Слой_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                viewBox="0 0 16 16"
                xmlSpace="preserve"
                {...restProps}
            >
                <g>
                    <g>
                        <path d="M15.3000002,1.9999933H0.7c-0.3,0-0.5-0.3-0.5-0.5s0.2-0.5000001,0.5-0.5000001h14.6000004
                            c0.3000002,0,0.5,0.2000001,0.5,0.5000001S15.6000004,1.9999933,15.3000002,1.9999933z"/>
                    </g>
                </g>
                <g>
                    <g>
                        <path d="M15.1999998,7.9999933H0.7c-0.4,0-0.5-0.3000002-0.5-0.5s0.1-0.5,0.5-0.5h14.6000004c0.1999998,0,0.5,0.1999998,0.5,0.5
                            S15.6000004,7.9999933,15.1999998,7.9999933z"/>
                    </g>
                </g>
                <g>
                    <g>
                        <path d="M15.3000002,13.9999933H0.7c-0.3,0-0.5-0.3000002-0.5-0.5s0.2-0.5,0.5-0.5h14.6000004c0.3000002,0,0.5,0.1999998,0.5,0.5
                            S15.6000004,13.9999933,15.3000002,13.9999933z"/>
                    </g>
                </g>
            </svg>
        );
    }
}
