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
                <div
                    className={classNames('Message__messageUnit', messageAuthor)}
                >
                    <p className={'Message__content'}>{this.props.content}</p>
                    {this.props.lastMessageInSequence && 
                        (this.props.myMessage 
                            ? <DialogCornerRightIcon className={'Message__dialogCornerRightIcon'} />
                            : <DialogCornerLeftIcon className={'Message__dialogCornerLeftIcon'} />)
                    }
                    <div className={'Message__sendTime'}>16:47</div>
                </div>
                
            </div>
        );
    }
}
