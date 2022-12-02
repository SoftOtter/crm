import React from 'react';
import { Chat } from './Chat/Chat';
import { ChatHeader } from './ChatHeader/ChatHeader';

import { ChatListAside } from './ChatListAside/ChatListAside';
import { ChatListBar } from './ChatListAside/ChatListBar/ChatListBar';
import { NewMessageInput } from './Chat/NewMessageInput/NewMessageInput';
import { chats } from '../data/chats';
import { users } from '../data/users';
import './messenger-style.css'

export class Messenger extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedChatID: 5,
            messages: [
                {
                    // messageFrom: userId;
                    myMessage: true,
                    //???
                    lastMessageInSequence: false,
                    content: 'Hi!',
                    messageMeta: '2022-11-25T05:01:37+03:00',
                },
                {
                    myMessage: true,
                    lastMessageInSequence: false,
                    content: 'How are you?',
                    messageMeta: '2022-11-25T05:01:37+03:00',
                },
                {
                    myMessage: false,
                    lastMessageInSequence: false,
                    content: 'Hello!',
                    messageMeta: '2022-11-25T05:05:37+03:00',
                },
                {
                    myMessage: false,
                    lastMessageInSequence: false,
                    content: 'I am ok, just finish excellent book and trying to find what else to read.',
                    messageMeta: '2022-11-25T05:05:37+03:00',
                },
                {
                    myMessage: false,
                    lastMessageInSequence: true,
                    content: 'What about you?',
                    messageMeta: '2022-11-25T05:06:37+03:00',
                },
                {
                    myMessage: true,
                    lastMessageInSequence: true,
                    content: 'I am good too, thanks! What book so impressed you? That one, which I told you about last week? ;)',
                    messageMeta: '2022-11-25T05:13:37+03:00',
                },
                {
                    myMessage: true,
                    lastMessageInSequence: false,
                    content: 'Hi!',
                    messageMeta: '2022-11-25T14:52:37+03:00',
                },
                {
                    myMessage: true,
                    lastMessageInSequence: false,
                    content: 'How are you?',
                    messageMeta: '2022-11-25T14:53:37+03:00',
                },
                {
                    myMessage: false,
                    lastMessageInSequence: false,
                    content: 'Hello!',
                    messageMeta: '2022-11-25T15:07:37+03:00',
                },
                {
                    myMessage: false,
                    lastMessageInSequence: false,
                    content: 'I am ok, just finish excellent book and trying to find what else to read.',
                    messageMeta: '2022-11-25T15:15:37+03:00',
                },
                {
                    myMessage: false,
                    lastMessageInSequence: true,
                    content: 'What about you?',
                    messageMeta: '2022-11-25T15:38:37+03:00',
                },
                {
                    myMessage: true,
                    lastMessageInSequence: true,
                    content: 'I am good too, thanks! What book so impressed you? That one, which I told you about last week? ;)',
                    messageMeta: '2022-11-25T15:40:37+03:00',
                },
                {
                    myMessage: true,
                    lastMessageInSequence: false,
                    content: 'Hi!',
                    messageMeta: '2022-11-28T15:40:37+03:00',
                },
                {
                    myMessage: true,
                    lastMessageInSequence: false,
                    content: 'How are you?',
                    messageMeta: '2022-11-28T15:40:37+03:00',
                },
                {
                    myMessage: false,
                    lastMessageInSequence: false,
                    content: 'Hello!',
                    messageMeta: '2022-11-28T15:40:37+03:00',
                },
                {
                    myMessage: false,
                    lastMessageInSequence: false,
                    content: 'I am ok, just finish excellent book and trying to find what else to read.',
                    messageMeta: '2022-11-28T23:59:37+03:00',
                },
                {
                    myMessage: false,
                    lastMessageInSequence: true,
                    content: 'What about you?',
                    messageMeta: '2022-11-29T00:05:37+03:00',
                },
                {
                    myMessage: true,
                    lastMessageInSequence: true,
                    content: 'I am good too, thanks! What book so impressed you? That one, which I told you about last week? ;)',
                    messageMeta: '2022-11-29T00:20:37+03:00',
                },
            ],
            chats: chats,
            users: users,
        };
    }

    render() {
        return (
            <div className={'Messenger'}>
                <div className={'Messenger__chatList'}>
                    <ChatListBar />
                    <ChatListAside 
                        chats={this.state.chats}
                        users={this.state.users}
                        selectedChat={this.state.selectedChatID}
                        onChatClick={this.switchChat}
                    />
                </div>
                <div className={'Messenger__chatContainer'}>
                    <ChatHeader 
                        selectedChatUser={this.getUserForSelectedChat()}
                    />
                    <Chat 
                        messages={this.state.messages}
                        selectedChat={this.state.selectedChatID}
                    />
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
    };

    switchChat = (nextChatID) => {
        this.setState({
            selectedChatID: nextChatID
        })
    };

    getUserForSelectedChat = () => {
        const selectedChat = this.state.chats.find((chat) => {
            return chat.id === this.state.selectedChatID;
        });
        const user = this.state.users.find((user) => {
            return selectedChat.userId === user.id;
        });
        return user;
    }
}
