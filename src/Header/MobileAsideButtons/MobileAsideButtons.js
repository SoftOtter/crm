import React from 'react';
import { NotificationIcon } from '../../icons/NotificationIcon';
import { MessageIcon } from '../../icons/MessageIcon';

export class MobileAsideButtons extends React.Component {
    render() {
        return (<>
            {/* Buttons (task and messages) on mobile screen*/}
            <div className="aside-buttons">	
            <button className="btn-aside btn-notifications">
                <NotificationIcon />
                <div className='indicator-icon active'></div>
            </button>
            
            <button className="btn-aside btn-messages">
                <MessageIcon />
            </button>
        </div>
        </>);
    }
}
