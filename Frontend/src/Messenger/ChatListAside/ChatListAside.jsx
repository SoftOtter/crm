import React from 'react';
import { ChatListBar } from './ChatListBar/ChatListBar';
import { ChatListItem } from './ChatListItem/ChatListItem';
import './chatListAside-style.css'

export class ChatListAside extends React.Component {
    render() {
        return (
            <div className={'ChatListAside'}>
                {this.props.chats.map((chat) => {
                    return <ChatListItem
                        key={chat.id}
                        chatID={chat.id}
                        selectedChat={this.props.selectedChat === chat.id}
                        userName={chat.user.userName}
                        lastMessage={chat.lastMessage}
                        metaMessage={chat.lastMessageMeta}
                        userOnline={chat.user.userOnline}
                        onChatClick={this.props.onChatClick}
                        userAvatar={chat.user.avatar}
                    />;
                })}
            </div>
        );
    }
}
