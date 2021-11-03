import React from 'react';
import './majorButton-style.css';
import classNames from 'classnames';

export class MajorButton extends React.Component {
    render() {
        const { icon, buttonText, className, children, ...rest } = this.props;
        return (
            <button 
                className={classNames('majorButton', className)}
                {...rest}
            >
            {icon &&
                <div className={'majorButton-iconContainer'}>
                    {icon}
                </div>
            }
            
            <span>{buttonText}</span>
            </button>
        );
    }
}
