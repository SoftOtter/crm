import React from 'react';
import { Svg } from '../Svg/Svg';

export class WorkingDaysIcon extends React.Component {
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
                viewBox="0 0 20 20" 
                xmlSpace="preserve"
                {...restProps}
            >
                <g>
                    <rect x="3.0036621" y="8.4868164" width="2" height="2"/>
                    <rect x="7" y="8.5" width="2" height="2"/>
                    <rect x="3" y="11.5" width="2" height="2"/>
                    <rect x="7" y="11.5" width="2" height="2"/>
                    <rect x="3.0036621" y="14.5048828" width="2" height="2"/>
                    <rect x="7" y="14.5" width="2" height="2"/>
                    <rect x="11" y="8.5" width="2" height="2"/>
                    <rect x="11" y="11.5" width="2" height="2"/>
                    <rect x="11" y="14.5" width="2" height="2"/>
                    <rect x="15" y="8.5" width="2" height="2"/>
                    <rect x="15" y="11.5" width="2" height="2"/>
                    <rect x="15" y="14.5" width="2" height="2"/>
                    <path d="M18,2.5h-2v-1h-1v1H5v-1H4v1H2c-0.5499878,0-1,0.4500122-1,1v3v1v10c0,0.5499878,0.4500122,1,1,1h16
                        c0.5499878,0,1-0.4500122,1-1v-10v-1v-3C19,2.9500122,18.5499878,2.5,18,2.5z M18,17.5H2v-10h16V17.5z M2,6.5v-3h2v1h1v-1h10v1h1
                        v-1h2v3H2z"/>
                </g>
            </svg>
        );
    }
}
