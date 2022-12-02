import React from 'react';
import { DialogCornerRightIcon } from '../../../icons/DialogCornerRightIcon';
import classNames from 'classnames';
import './message-style.css';
import { DialogCornerLeftIcon } from '../../../icons/DialogCornerLeftIcon';

export class Message extends React.Component {
    
    render() {
        let messageAuthor = null;
        if (this.props.myMessage) {
            messageAuthor='Message__myMessage';
        } else {
            messageAuthor='Message__interlocutorMessage';
        }
        return (
            <div className={classNames('Message', this.props.myMessage && 'Message-reverseDirection')}>
                <div className={classNames('Message__messageUnit', messageAuthor)}>
                    <p className={'Message__content'}>{this.props.content}</p>
                    {this.props.lastMessageInSequence && 
                        (this.props.myMessage 
                            ? <DialogCornerRightIcon className={'Message__dialogCornerRightIcon'} />
                            : <DialogCornerLeftIcon className={'Message__dialogCornerLeftIcon'} />)
                    }
                    <p className={'Message__sendTime'}>{this.formatMeta(this.props.messageMeta)}</p>
                    {/* <div className={'Message__sendTime'}>{this.props.time.hour + ':' + this.props.time.minute}</div> */}
                </div>
                
            </div>
        );
    }

    formatMeta = (meta) => {
        const parsedMeta = new Date(meta);
        const year = parsedMeta.getFullYear();
        const month = this.addZero(parsedMeta.getMonth() + 1); 
        const day = this.addZero(parsedMeta.getDate());

        const currentMeta = new Date();
        const currentYear = currentMeta.getFullYear();
        const currentMonth = this.addZero(currentMeta.getMonth() + 1); 
        const currentDay = this.addZero(currentMeta.getDate());

        if ((year === currentYear) && (month === currentMonth) && (day === currentDay)) {
            const hours = this.addZero(parsedMeta.getHours());
            const minutes = this.addZero(parsedMeta.getMinutes());
            return `${hours}:${minutes}`;
        }
        return `${day}.${month}.${year}`;
    };

    addZero = (num) => {
        if ((0 <= num) && (num < 10)) {
            return '0' + num;
        }
        return '' + num;
    }
}
