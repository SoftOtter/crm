import React from 'react';
import classNames from 'classnames';
import './input-style.css';
import ErrorIcon from '../../icons/ErrorIcon';

class Input extends React.Component {
    render() {
        let icon = null;
        if (this.props.icon) {
            icon = this.props.icon;
        } else if (this.props.error) {
            icon = <ErrorIcon className={'input-error-icon'}/>;
        }

        return (
            <label for={this.props.id}>
                <p className={'label'}>{this.props.label}</p>
                <div className={classNames('input', this.props.className, this.props.error && 'error', this.props.compact && 'compact')}>
                    <input
                        id={this.props.id}
                        placeholder={this.props.placeholder}
                    />
                    {icon}
                </div>
                {this.props.error &&
                    <p className={'error'}>{this.props.error}</p>
                }
            </label>
        );
    }
}

export default Input;
