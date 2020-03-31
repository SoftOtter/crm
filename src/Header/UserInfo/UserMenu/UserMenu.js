import React from 'react';
import MoreInfoIcon from '../../../icons/MoreInfoIcon';

class UserMenu extends React.Component {
    render() {
        return (
            <button className='btn-more btn-user-menu'>
                <div className='more-info-icon'>
                    <MoreInfoIcon />
                </div>
            </button>
        );
    }
}

export default UserMenu;
