import React from 'react';
import classNames from 'classnames';
import './majorButton-style.css';

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
