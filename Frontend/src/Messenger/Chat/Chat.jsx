import React from 'react';
import { NewMessageInput } from './NewMessageInput/NewMessageInput';
import { Message } from './Message/Message';
import './chat-style.css'

export class Chat extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            messages: [
                {
                    myMessage: true,
                    lastMessageInSequence: false,
                    content: 'Hi!',
                },
                {
                    myMessage: true,
                    lastMessageInSequence: false,
                    content: 'How are you?',
                },
                {
                    myMessage: false,
                    lastMessageInSequence: false,
                    content: 'Hello!',
                },
                {
                    myMessage: false,
                    lastMessageInSequence: false,
                    content: 'I am ok, just finish excellent book and trying to find what else to read.',
                },
                {
                    myMessage: false,
                    lastMessageInSequence: true,
                    content: 'What about you?',
                },
                {
                    myMessage: true,
                    lastMessageInSequence: true,
                    content: 'I am good too, thanks! What book so impressed you? That one, which I told you about last week? ;)',
                },
            ],
        };
    }

    render() {
        return (
            <div className={'Chat'}>
                {this.state.messages.map((messObj, index) => {
                    return <Message 
                        key={index}
                        myMessage={messObj.myMessage} 
                        lastMessageInSequence={messObj.lastMessageInSequence}
                        content={messObj.content}
                        time={{
                            hour: 17,
                            minute: 55,
                        }}
                    />;
                })}
                
                <NewMessageInput onEnterPress={this.handleEnterPressed} />
            </div>
        );
    }

    handleEnterPressed = (text) => {
        const newMessages = this.state.messages.concat({
            myMessage: true,
            lastMessageInSequence: true,
            content: text,
        });
        if (newMessages[newMessages.length - 2].myMessage) {
            newMessages[newMessages.length - 2].lastMessageInSequence = false;
        }
        this.setState({
            messages: newMessages
        });
    }
}
