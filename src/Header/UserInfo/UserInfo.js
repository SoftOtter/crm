import React from 'react';
import UserMenu from './UserMenu/UserMenu';

class UserInfo extends React.Component {
    render() {
        return (
            <div className='user-info'>
                <div className='user-icon-container'>
                    <img className='user-icon' src='#' alt='' />
                </div>
                <div className='info'>
                    <span className='full-name'>Максим Саяпин</span>
                    <br/>
                    <span className='position'>продавец</span>
                </div>
                <UserMenu />
            </div>
        );
    }
}

export default UserInfo;
