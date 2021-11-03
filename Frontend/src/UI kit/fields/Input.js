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
            const clonedIcon = React.cloneElement(
                this.props.icon,
                {
                    className: classNames(this.props.icon.props.className, 'Input__icon')
                }
            );

            icon =
                <button 
                    className={'Input__iconButton'}
                    onClick={this.props.onButtonClick}
                >
                    <div className={'Input__iconButtonWrapper'}>
                        {clonedIcon}
                    </div>
                </button>;
        } else if (this.props.error) {
            icon = 
            <div className={'Input__errorIconWrapper'}>
                <ErrorIcon className={'input-error-icon'}/>
            </div>;
        }

        return (
            <div
                className={this.props.className}
            >
                <p className={'input-label'}>
                    {this.props.label}
                </p>
                <div className={classNames(
                    'input',
                    this.props.error && 'error',
                    (this.props.icon || this.props.error) && 'icon-padding',
                    this.state.focused && 'inputForSelect-focused',
                )}
                >
                    <input
                        id={this.props.id}
                        placeholder={this.props.placeholder}
                        onBlur={this.handleBlur}
                        onFocus={this.handleClickFocus}
                    />
                    {icon}
                </div>
                <p className={'error'}>{this.props.error ? this.props.error : ' '}</p>
            </div>
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