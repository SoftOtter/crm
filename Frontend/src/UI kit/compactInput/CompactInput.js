import React from 'react';
import { ErrorIcon } from '../../icons/ErrorIcon';
import classNames from 'classnames';
import './compactInput-style.css'

export class CompactInput extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            focused: false,
            value: '',
        };
    }
    render() {
        let icon = null;
        if (this.props.error) {
            icon = 
                <div className={'CompactInput__errorIconWrapper'}>
                    <ErrorIcon className={'CompactInput__errorIcon'}/>
                </div>;
        }
        return (
            <div className={classNames('CompactInput', this.props.className)}>
                <label 
                    className={classNames(
                        'CompactInput__label',
                        (this.state.focused || this.state.value) && 'CompactInput__labelAnimated',
                        this.state.focused && 'CompactInput__label-color',
                    )}
                    htmlFor={this.props.inputId}
                >
                    {this.props.label}
                </label>

                <div 
                    className={classNames(
                        'CompactInput__inputWrapper',
                        this.props.error && 'CompactInput__inputWrapperError',
                        this.state.focused && 'CompactInput__input-focused',
                    )}
                >
                    <input
                        className={classNames('CompactInput__input')}
                        placeholder={this.props.placeholder}
                        onBlur={this.handleBlur}
                        onFocus={this.handleClickFocus}
                        id={this.props.inputId}
                        value={this.state.value}
                        onChange={this.handleInputChange}
                    />
                    {icon}
                </div>

                <p className={'CompactInput_errorText'}>{this.props.error ? this.props.error : ' '}</p>
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

    handleInputChange = (event) => {
        this.setState({
            value: event.target.value,
        });
    }
}
