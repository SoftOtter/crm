import React from 'react';
import ListItem from './ListItem/ListIem';
import { ControlPanelIcon } from '../icons/icons_20px/ControlPanelIcon';
import { StatisticsIcon } from '../icons/icons_20px/StatisticsIcon';
import { SalesIcon } from '../icons/icons_20px/SalesIcon';
import { ReviseIcon } from '../icons/icons_20px/ReviseIcon';
import { WorkingDaysIcon } from '../icons/icons_20px/WorkingDaysIcon';
import { DocumentsIcon } from '../icons/icons_20px/DocumentsIcon';
import './navigation-style.css';

const logoImg = require('./logo.png');

class Navigation extends React.Component {
    render() {
        return (
            <nav>
                <div className='nav-content'>
                    <div className='logo'>
                        <img className='logo-img' src={logoImg} alt='' />
                    </div>
                    <ul>
                        <ListItem label='Панель управления' icon={<ControlPanelIcon />} />
                        <ListItem label='Статистика' icon={<StatisticsIcon />} />
                        <ListItem label='Мои продажи' icon={<SalesIcon />} />
                        <ListItem label='Сверка товаров' icon={<ReviseIcon />} />
                        <ListItem label='Мои смены' icon={<WorkingDaysIcon />} />
                        <ListItem label='Мои документы' icon={<DocumentsIcon />} />
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Navigation;