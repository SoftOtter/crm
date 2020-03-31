import React from 'react';
import './majorButton-style.css';
import classNames from 'classnames';

export class MajorButton extends React.Component {
    render() {
        return (
            <button className={classNames('majorButton', this.props.className)}>
                <div className={'majorButton-iconContainer'}>
                    {this.props.icon &&
                        this.props.icon
                    }
                </div>

                <span>{this.props.buttonText}</span>
            </button>
        );
    }
}
