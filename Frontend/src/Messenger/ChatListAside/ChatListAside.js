import React from 'react';
import { ChatListBar } from './ChatListBar/ChatListBar';
import { ChatListItem } from './ChatListItem/ChatListItem';
import './chatListAside-style.css'

export class ChatListAside extends React.Component {
    render() {
        return (
            <div className={'ChatListAside'}>
                <ChatListBar />
                <ChatListItem 
                    openedChat={true}
                />
                <ChatListItem 
                    openedChat={false}
                />
                <ChatListItem 
                    openedChat={false}
                />
            </div>
        );
    }
}
