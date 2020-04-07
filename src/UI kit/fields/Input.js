import React from 'react';
import classNames from 'classnames';
import './input-style.css';
import { ErrorIcon } from '../../icons/ErrorIcon';

class Input extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            focused: false,
        };
    }

    render() {
        let icon = null;
        if (this.props.icon) {
            icon = this.props.icon;
        } else if (this.props.error) {
            icon = <ErrorIcon className={'input-error-icon'}/>;
        }

        return (
            <label htmlFor={this.props.id}>
                <p className={'input-label'}>
                    {this.props.label}
                </p>
                <div className={classNames(
                    'input', 
                    this.props.className, 
                    this.props.error && 'error',
                    (this.props.icon || this.props.error) && 'icon-padding', 
                    this.props.compact && 'compact',
                    this.state.focused && 'inputForSelect-focused',
                )}
                onClick = {this.handleClickFocus}
                >
                    <input
                        id={this.props.id}
                        placeholder={this.props.placeholder}
                        onBlur={this.handleBlur}
                    />
                    {icon}
                </div>
                <p className={'error'}>{this.props.error ? this.props.error : ' '}</p>
                
            </label>
        );
    }

    handleClickFocus = () => {
        this.setState({
            focused: true,
        });
    };

    handleBlur = () => {
        this.setState({
            focused: false,
        });
    };
}

export default Input;