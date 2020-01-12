import React from 'react';
import NavButton from './NavButton/NavButton';
import ProjectSelect from './ProjectSelect/ProjectSelect';
import CurrentDate from './CurrentDate/CurrentDate';
import './style.css';
import Rates from './Rates/Rates';
import HelpIcon from './icons/HelpIcon';
import MobileAsideButtons from './MobileAsideButtons/MobileAsideButtons';
import UserInfo from './UserInfo/UserInfo';

class Navigation extends React.Component {
    render() {
        return (
            <header>
                <div className='left-part'>
                    <NavButton />
                    <ProjectSelect />
                    <CurrentDate />
                    <Rates />
                </div>
                <div className='right-part'>
                        <button className='btn-help'>
                            <HelpIcon />
                            <span>Помощь</span>
                        </button>
                        <UserInfo />

                        <MobileAsideButtons />
                    </div>
            </header>
        );
    }
}

export default Navigation;