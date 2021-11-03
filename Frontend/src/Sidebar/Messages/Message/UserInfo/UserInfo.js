import React from 'react';

class UserInfo extends React.Component {
    render() {
        return (
            <div className='user-info'>
                <div className='user-icon-container'>
                    <img className='user-icon' src='' alt=''/>
                </div>
                <span className='user-name'>{this.props.username}</span>
                {this.props.online &&
                    <div className='online-indicator'></div>
                }
            </div>
        );
    }
}

export default UserInfo;
