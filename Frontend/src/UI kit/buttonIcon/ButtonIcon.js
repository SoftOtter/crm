import React from 'react';
import classNames from 'classnames';
import './buttonIcon-style.css';
import TooltipForButton from '../tooltipForButton/TooltipForButton';

export class ButtonIcon extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            onHover: false,
            onFocus: false,
        };

        this.wrapperDiv = React.createRef();
    }

    static defaultProps = {
        classes: {}
    };

    render() {
        return (
            <div 
                className={classNames('buttonIcon-wrapper', this.props.className)}
                ref={this.wrapperDiv}
            >
                <button 
                    className = {classNames('button-icon', this.props.classes.btnSize)}
                    onMouseEnter = {this.handleEnter}
                    onMouseLeave = {this.handleLeave}
                    onClick = {this.props.onClick}
                >
                    {this.props.icon}
                    <div className={'svgBtnIcon-wrapper'}></div>
                </button>

                {(this.props.textForTooltip && this.state.onHover && !this.state.onFocus) &&
                    <TooltipForButton
                        tooltipHover={this.state.onHover}
                        tooltipText={this.props.textForTooltip}
                    />
                }
            </div>
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
