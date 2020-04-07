import React from 'react';
import Message from './Message/Message';
import { messages as messagesFromServer } from "../../data/dataForMessages";

class Messages extends React.Component {
    render() {
        return (
            <div className='messages'>
                {messagesFromServer.map((mes) => <Message data={mes} key={mes.id} />)}
            </div>
        );
    }
}

export default Messages;
