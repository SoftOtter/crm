import React from 'react';
import { Message } from './Message/Message';
import './chat-style.css'

export class Chat extends React.Component {
    scrollableDiv = React.createRef();
    render() {
        return (
            <div className={'Chat'} ref={this.scrollableDiv}>
                <div className={'Chat__messagesContainer'}>
                    {this.props.messages.map((messObj, index) => {
                        return <Message 
                            key={index}
                            myMessage={messObj.myMessage} 
                            lastMessageInSequence={messObj.lastMessageInSequence}
                            content={messObj.content}
                            messageMeta={messObj.messageMeta}
                       />;
                    })}
                </div>
            </div>
        );
    }
    componentDidUpdate(prevProps) {
        const newMessegesCount = this.props.messages.length;
        const oldMessengesCount = prevProps.messages.length;
        if (newMessegesCount - oldMessengesCount == 1) {
            this.scrollableDiv.current.scrollTo({
                top: this.scrollableDiv.current.scrollHeight,
                behavior: 'smooth',
            });
        }
    }

    componentDidMount() {
        this.scrollableDiv.current.scrollTo({
            top: this.scrollableDiv.current.scrollHeight,
            behavior: 'instant',
        });
    }
}
