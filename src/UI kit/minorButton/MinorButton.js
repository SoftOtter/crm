import React from 'react';
import { ButtonWithIcon } from '../buttonWithIcon/ButtonWithIcon';
import './minorButton-style.css';

export class MinorButton extends React.Component {
    render() {
        return (
            <ButtonWithIcon 
                className = {'minorButton'}
                icon = {this.props.icon}
                buttonText = {this.props.buttonText}
            />
        );
    }
}
