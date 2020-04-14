import React from 'react';
import classNames from 'classnames';
import { ErrorIcon } from '../../icons/ErrorIcon';
import InputMask from 'react-input-mask';
import './input-style.css';

export class InputWithMask extends React.Component {
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
                </button>
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
                    this.props.compact && 'compact',
                    this.state.focused && 'inputForSelect-focused',
                )}
                >
                    <InputMask
                        id={this.props.id}
                        mask={this.props.mask}
                        placeholder={this.props.placeholder}
                        onBlur={this.handleBlur}
                        onFocus={this.handleClickFocus}
                        value={this.props.value}
                        onChange={this.props.onChange}
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