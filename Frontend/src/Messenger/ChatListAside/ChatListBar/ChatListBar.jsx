import React from 'react';
import { ChatSearch } from './ChatSearch/ChatSearch';
import { NewChat } from './NewChat/NewChat';
import './chatListBar-style.css'

export class ChatListBar extends React.Component {
    render() {
        return (
            <div className={'ChatListBar'}>
                <NewChat className={'ChatListBar__newChatButton'} />
                <ChatSearch className={'ChatListBar__chatSearch'} />
            </div>
        );
    }
}
