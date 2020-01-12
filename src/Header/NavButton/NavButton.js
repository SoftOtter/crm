import React from 'react';
import BurgerIcon from './icons/BurgerIcon';

class NavButton extends React.Component {
    render() {
        return (<>
            {/* Button on screens smaller than 992px */}
            <div className='btn-burger'>
                <button className='btn-menu'>
                    <BurgerIcon />
                </button>
            </div>
        </>);
    }
}

export default NavButton;
