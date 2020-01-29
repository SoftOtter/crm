import React from 'react';
import TaskIcon from '../../icons/TaskIcon';
import MessageIcon from '../../icons/MessageIcon';
import NotificationIcon from '../../icons/NotificationIcon';

class AsideModeButtons extends React.Component {
    render() {
        return (
            <div className="buttons">
                <input className="aside-button" type="radio" id="messages" name="aside-button" value="messages" defaultChecked />
                <label htmlFor="messages" className="btn-messages">
                    <MessageIcon />
                </label>
                
                <input className="aside-button" type="radio" id="tasks" name="aside-button" value="tasks" />
                <label htmlFor="tasks" className="btn-tasks">
                    <TaskIcon />
                </label>
                
                <input className="aside-button" type="radio" id="notifications" name="aside-button" value="notifications" />
                <label htmlFor="notifications" className="btn-notifications">
                    <NotificationIcon />
                    <div className='indicator-icon active'></div>
                </label>
            </div>
        );
    }
}

export default AsideModeButtons;
