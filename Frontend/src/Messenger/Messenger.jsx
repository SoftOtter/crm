import React from 'react';
import { Chat } from './Chat/Chat';
import { ChatHeader } from './ChatHeader/ChatHeader';

import { ChatListAside } from './ChatListAside/ChatListAside';
import { ChatListBar } from './ChatListAside/ChatListBar/ChatListBar';
import { NewMessageInput } from './Chat/NewMessageInput/NewMessageInput';
import './messenger-style.css'

export class Messenger extends React.Component {
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
            <div className={'Messenger'}>
                <div className={'Messenger__chatList'}>
                    <ChatListBar />
                    <ChatListAside />
                </div>
                <div className={'Messenger__chatContainer'}>
                    <ChatHeader />
                    <Chat messages={this.state.messages} />
                    <NewMessageInput onEnterPress={this.handleEnterPressed} />
                </div>
                
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