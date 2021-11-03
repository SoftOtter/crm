import React from 'react';
import { Chat } from './Chat/Chat';
import { ChatHeader } from './ChatHeader/ChatHeader';
import { ChatListAside } from './ChatListAside/ChatListAside';
import './messenger-style.css'

export class Messenger extends React.Component {
    render() {
        return (
            <div className={'Messenger'}>
                <ChatListAside className={'Messenger__chatList'} />
                <div className={'Messenger__chatContainer'}>
                    <ChatHeader />
                    <Chat />
                </div>
                
            </div>
        );
    }
}
