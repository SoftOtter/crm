import React from 'react';
import './buttonWithIcon-style.css';
import classNames from 'classnames';

export class ButtonWithIcon extends React.Component {
    render() {
        return (
            <button className={classNames('buttonWithIcon', this.props.className)}>
                {this.props.icon &&
                    <div className={'buttomWithIcon-iconContainer'}>
                        {this.props.icon}
                    </div>
                }

                <span>{this.props.buttonText}</span>
            </button>
        );
    }
}
