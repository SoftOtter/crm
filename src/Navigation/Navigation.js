import React from 'react';
import ListItem from './ListItem/ListIem';
import ControlPanelIcon from './icons/ControlPanelIcon';
import StatisticsIcon from './icons/StatisticsIcon';
import SalesIcon from './icons/SalesIcon';
import ReviseIcon from './icons/ReviseIcon';
import WorkingDaysIcon from './icons/WorkingDaysIcon';
import DocumentsIcon from './icons/DocumentsIcon';
import './style.css';

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