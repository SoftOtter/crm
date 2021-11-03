import React from 'react';
import classNames from 'classnames';
import TooltipForButton from '../tooltipForButton/TooltipForButton';
import './buttonWithIcon-style.css';

export class ButtonWithIcon extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            onHover: false,
            onFocus: false,
        };
    }
    render() {
        return (
            <button 
                className={classNames('buttonWithIcon', this.props.className)}
                onClick={this.props.onClick}
                onMouseEnter = {this.handleEnter}
                onMouseLeave = {this.handleLeave}
            >
                {this.props.icon &&
                    <div className={'buttomWithIcon-iconContainer'}>
                        {this.props.icon}
                    </div>
                }

                {(this.props.textForTooltip && this.state.onHover && !this.state.onFocus) &&
                    <TooltipForButton
                        tooltipHover={this.state.onHover}
                        tooltipText={this.props.textForTooltip}
                    />
                }

                {/* <span>{this.props.buttonText}</span> */}
            </button>
        );
    }

    handleEnter = () => {
        this.setState({
            onHover: true,
        });
    }

    handleLeave = () => {
        this.setState({
            onHover: false,
        });
    }
}
