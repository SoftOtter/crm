import React from 'react';
import classNames from 'classnames';
import './svg-style.css'

export class Svg extends React.Component {
    render() {
        const {children, ...restProps} = this.props;
        return (
            <svg
                {...restProps}
                className={classNames(restProps.className, 'svgIcon')}
            >
                {children}
            </svg>
        );
    }
}
