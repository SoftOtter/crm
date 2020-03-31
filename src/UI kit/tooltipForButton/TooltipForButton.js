import React from 'react';
import './tooltipForButton.css'
import ArrowForTooltip from '../../icons/ArrowForTooltip';
import classNames from 'classnames';

class TooltipForButton extends React.Component {
    render() {
        return (<>
            <div 
                className = {classNames(
                    'tooltipForButton-wrapper', 
                    'show',
                )}
            >
                <div className={'arrowForTooltip-container'}>
                    <ArrowForTooltip className={'arrowForTooltip'} />
                </div>

                <p className = {'tooltipForButton-text'}>
                    {this.props.tooltipText}
                </p>
            </div>
            </>
        );
    }
}

export default TooltipForButton;
