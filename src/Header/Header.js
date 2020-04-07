import React from 'react';
import NavButton from './NavButton/NavButton';
import ProjectSelect from './ProjectSelect/ProjectSelect';
import CurrentDate from './CurrentDate/CurrentDate';
import './header-style.css';
import Rates from './Rates/Rates';
import HelpIcon from '../icons/HelpIcon';
import { MobileAsideButtons } from './MobileAsideButtons/MobileAsideButtons';
import { UserInfo } from './UserInfo/UserInfo';
import { ButtonWithIcon } from '../UI kit/buttonWithIcon/ButtonWithIcon';
import { DollarIcon } from '../icons/DollarIcon';
import { EuroIcon } from '../icons/EuroIcon';

class Navigation extends React.Component {
    render() {
        return (
            <header>
                <div className='left-part'>
                    <NavButton />
                    <ProjectSelect />
                    <CurrentDate />
                    <div className={'rates-wrapper'}>
                        <Rates 
                            currencyIcon = {<DollarIcon className={'currencyIcon'}/>}
                            rate = {'USD'}
                        />
                        <Rates 
                            currencyIcon = {<EuroIcon className={'currencyIcon'}/>}
                            rate = {'EUR'}
                        />
                    </div>
                </div>
                <div className='right-part'>
                    <ButtonWithIcon
                        icon = {<HelpIcon className={'iconForBtnWithIcon helpIcon'}/>}
                        buttonText = {'Помощь'}
                        className={'btn-help'}
                    />
                    <UserInfo />

                    <MobileAsideButtons />
                </div>
            </header>
        );
    }
}

export default Navigation;