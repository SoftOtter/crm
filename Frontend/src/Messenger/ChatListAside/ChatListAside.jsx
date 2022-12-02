import React from 'react';
import { ChatListBar } from './ChatListBar/ChatListBar';
import { ChatListItem } from './ChatListItem/ChatListItem';
import './chatListAside-style.css'

export class ChatListAside extends React.Component {
    render() {
        return (
            <div className={'ChatListAside'}>
                {this.props.chats.map((chat) => {
                    const user = this.props.users.find((users) => {
                        return chat.userId === users.id;
                    });
                    return <ChatListItem
                        key={chat.id}
                        chatID={chat.id}
                        selectedChat={this.props.selectedChat === chat.id}
                        userName={user.userName}
                        lastMessage={chat.lastMessage}
                        messageMeta={chat.lastMessageMeta}
                        userOnline={user.userOnline}
                        onChatClick={this.props.onChatClick}
                        userAvatar={user.avatar}
                    />;
                })}
            </div>
        );
    }
}
