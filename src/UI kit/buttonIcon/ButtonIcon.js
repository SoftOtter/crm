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

    render() {
        return (
            <div 
                className={classNames('buttonIcon-wrapper', this.props.className)}
                ref={this.wrapperDiv}
            >
                <button 
                    className = {classNames('button-icon')}
                    onMouseEnter = {this.handleEnter}
                    onMouseLeave = {this.handleLeave}
                    onClick = {this.handleClickButton}
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

    handleClickButton = () => {
        if (this.props.dataForDropDownMenu) {
            this.setState({
                onFocus: !this.state.onFocus,
            })
        }
        if (typeof this.props.onClick === 'function') {
            this.props.onClick();
        }
    }
}
