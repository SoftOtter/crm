import React from 'react';
import { NewMessageInput } from './NewMessageInput/NewMessageInput';
import { Message } from './Message/Message';
import './chat-style.css'

export class Chat extends React.Component {
    render() {
        return (
            <div className={'Chat'}>
                <Message 
                    myMessage={true} 
                    lastMessageInSequence={false}
                    content={'Hi!'}
                />
                <Message 
                    myMessage={true} 
                    lastMessageInSequence={true}
                    content={'How are you?'}
                />
                <Message 
                    myMessage={false} 
                    lastMessageInSequence={false}
                    content={'Hello!'}
                />
                <Message 
                    myMessage={false} 
                    lastMessageInSequence={false}
                    content={'I am ok, just finish excellent book and trying to find what else to read.' }
                />
                <Message 
                    myMessage={false} 
                    lastMessageInSequence={true}
                    content={'What about you?'}
                />
                <Message 
                    myMessage={true} 
                    lastMessageInSequence={true}
                    content={'I am good too, thanks! What book so impressed you? That one, which I told you about last week? ;)'}
                />
                <NewMessageInput />
            </div>
        );
    }
}
