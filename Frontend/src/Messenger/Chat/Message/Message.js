import React from 'react';
import { DialogCornerRightIcon } from '../../../icons/DialogCornerRightIcon';
import classNames from 'classnames';
import { DialogCornerLeftIcon } from '../../../icons/DialogCornerLeftIcon';

import './message-style.css';


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
                    <p 
                        className={'Message__sendTime'}
                        title={this.getFullFormattedMeta(this.props.messageMeta)}
                    >
                        {this.getFormattedTime(this.props.messageMeta)}
                    </p>
                </div>
                
            </div>
        );
    }

    getFullFormattedMeta = (meta) => {
        const parsedMeta = new Date(meta);
        const intlOptions = {year:'numeric', month:'short', day:'numeric',
                            hour:'2-digit', minute:'2-digit', second:'2-digit'};
        return Intl.DateTimeFormat('en-GB',intlOptions).format(parsedMeta);
    };

    getFormattedTime = (meta) => {
        const parsedMeta = new Date(meta);
        const intlOptions = {hour:'2-digit', minute:'2-digit'};
        return Intl.DateTimeFormat('en-GB',intlOptions).format(parsedMeta);
    }
}
