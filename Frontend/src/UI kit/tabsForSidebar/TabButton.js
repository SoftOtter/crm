import React from 'react';
import classNames from 'classnames';
import { MessageIcon } from '../../icons/MessageIcon';
import TooltipForButton from '../tooltipForButton/TooltipForButton';

export class TabButton extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            onHover: false,
        }
    }

    render() {
        return (
            <button className = {classNames('tabsButton', this.props.className)}
                disabled = {this.props.disabled}
                onClick = {this.handleClick}
            >
                <div 
                    className = {classNames('tabButton-wrapper')}
                    onMouseEnter = {this.handleEnter}
                    onMouseLeave = {this.handleLeave}
                >
                    <div className = {classNames('sizeFixed', (this.props.showIndicator && !this.props.disabled) && 'smthNewIndicator')}>
                        {this.props.children}
                    </div>
                </div>

                {(this.props.tooltipText && this.state.onHover) &&
                    <TooltipForButton
                        tooltipHover={this.state.onHover}
                        tooltipText={this.props.tooltipText}
                    />
                }
            </button>
        );
    }

    handleClick = () =>
        this.props.onClick(this.props.value);

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
