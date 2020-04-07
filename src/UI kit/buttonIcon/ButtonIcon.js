import React from 'react';
import classNames from 'classnames';
import './buttonIcon-style.css';
import TooltipForButton from '../tooltipForButton/TooltipForButton';
import { DropDownMenu } from '../dropDownMenu/DropDownMenu';
import { dataForMenu } from '../../data/dataForMenu';

class ButtonIcon extends React.Component {
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

                {(this.props.dataForDropDownMenu && this.state.onFocus) && 
                    <DropDownMenu 
                        dropDownItems={this.props.dataForDropDownMenu}
                        closeMenuOutside={this.handleClickOutside}
                        closeMenu={this.handleClickSelect}
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

    handleClickOutside = (event) => {
        if (!this.wrapperDiv.current.contains(event.target)){
            this.setState({
                onFocus: false,
            })
        }
    }

    handleClickSelect = (value) => {
        this.setState({
            onFocus: false,
        })
    }
}

export default ButtonIcon;
