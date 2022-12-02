import React from 'react';
import classNames from 'classnames';
import TooltipForButton from '../../../../UI kit/tooltipForButton/TooltipForButton';

export class MessageMeta extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            onHover: false,
        };
    }
    render() {
        return (
            <p 
                className={this.props.className}
                onMouseEnter = {this.handleEnter}
                onMouseLeave = {this.handleLeave}
            >
                {this.getFormattedTime(this.props.messageMeta)}
                {(this.state.onHover) &&
                    <TooltipForButton
                        tooltipText={this.getFullFormattedMeta(this.props.messageMeta)}
                    />
                }
            </p>
        );
    }

    getFullFormattedMeta = (meta) => {
        const parsedMeta = new Date(meta);
        const year = parsedMeta.getFullYear();
        const month = this.addZero(parsedMeta.getMonth() + 1); 
        const day = this.addZero(parsedMeta.getDate());

        const hours = this.addZero(parsedMeta.getHours());
        const minutes = this.addZero(parsedMeta.getMinutes());
        const seconds = this.addZero(parsedMeta.getSeconds());
        return `${day}.${month}.${year}, ${hours}:${minutes}:${seconds}`;
    };

    getFormattedTime = (meta) => {
        const parsedMeta = new Date(meta);
        const hours = this.addZero(parsedMeta.getHours());
        const minutes = this.addZero(parsedMeta.getMinutes());
        return `${hours}:${minutes}`;
    }

    addZero = (num) => {
        if ((0 <= num) && (num < 10)) {
            return '0' + num;
        }
        return '' + num;
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
