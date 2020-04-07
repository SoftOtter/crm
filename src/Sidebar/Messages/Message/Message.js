import React from 'react';
import ReplyIcon from '../../../icons/ReplyIcon';
import UserInfo from './UserInfo/UserInfo';
import CurrentDate from '../../../Header/CurrentDate/CurrentDate';

class Message extends React.Component {
    static days = [
        'сегодня ',
        'вчера ',
    ];
    
    render() {
        return (
            <div className='message'>
                <div className='message-header'>
                    {/* <div className='date-time'>сегодня 14:42</div> */}
                    {/* 2020-01-12T13:05:00+03:00 */}
                    <div className='date-time'>{Message.formatTime(this.props.data.time)}</div>
                    <button className='btn-reply'>
                        <ReplyIcon />
                    </button>
                </div>
                <UserInfo username={this.props.data.user.name} online={this.props.data.onlineStatus} />
                <p className='message-content'>{this.props.data.content}</p>
            </div>
        );
    }

    static formatTime(time) {
        const timeObject = new Date(time);
        const currentDate = new Date();
        const yesterdayDate = new Date(currentDate.getTime()); // Copy current Date
        yesterdayDate.setDate(yesterdayDate.getDate() - 1);

        let result;
        if (timeObject.getFullYear() === currentDate.getFullYear()
            && timeObject.getMonth() === currentDate.getMonth()
            && timeObject.getDate() === currentDate.getDate()) {
            result = Message.days[0];
        }
        else if (timeObject.getFullYear() === yesterdayDate.getFullYear()
            && timeObject.getMonth() === yesterdayDate.getMonth()
            && timeObject.getDate() === yesterdayDate.getDate()) {
            result = Message.days[1];
        }
        else {
            result = CurrentDate.toDateString(timeObject) + ' ';
        }

        const minutes = timeObject.getMinutes() < 10
            ? '0' + timeObject.getMinutes()
            : timeObject.getMinutes();

        result += timeObject.getHours() + ':' + minutes;
        return result;
    }
}

export default Message;
