import React from 'react';
import { ButtonWithIcon } from '../buttonWithIcon/ButtonWithIcon';
import './minorButton-style.css';
import classNames from 'classnames';

export class MinorButton extends React.Component {
    render() {
        return (
            <ButtonWithIcon 
                className = {classNames('minorButton', this.props.className)}
                icon = {this.props.icon}
                buttonText = {this.props.buttonText}
                onClick={this.props.onClick}
            />
        );
    }
}
