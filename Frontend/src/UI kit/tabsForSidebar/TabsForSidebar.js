import React from 'react';
import { MessageIcon } from '../../icons/MessageIcon';
import { TaskIcon } from '../../icons/TaskIcon';
import { NotificationIcon } from '../../icons/NotificationIcon';
import classNames from 'classnames';
import './tabsForSidebar-style.css';
import { TabButton } from './TabButton';


export class TabsForSidebar extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            chosenTab: this.findDefaultChosenTab(),
            newMessage: false,
            newTask: true,
            newNotification: false,
        }
    }

    render() {
        return (
            <div className={classNames('tabsForSidebar-wrapper', this.props.className)}>
                <TabButton
                    className = {classNames('leftTab', (this.state.chosenTab === 1) && 'chosen')}
                    disabled = {this.props.disabledButtons && this.props.disabledButtons.includes(1)}
                    onClick = {this.handleClick}
                    value = {1}
                    showIndicator = {this.state.newMessage}
                    tooltipText = {'Messages'}
                >
                    <MessageIcon className={'tabsForSidebar-icon'} />
                </TabButton>

                <TabButton
                    className = {(this.state.chosenTab === 2) && 'chosen'}
                    disabled = {this.props.disabledButtons && this.props.disabledButtons.includes(2)}
                    onClick = {this.handleClick}
                    value = {2}
                    showIndicator = {this.state.newTask}
                    tooltipText = {'Tasks'}
                >
                    <TaskIcon className={'tabsForSidebar-icon'} />
                </TabButton>

                <TabButton
                    className = {classNames('rightTab', (this.state.chosenTab === 3) && 'chosen')}
                    disabled = {this.props.disabledButtons && this.props.disabledButtons.includes(3)}
                    onClick = {this.handleClick}
                    value = {3}
                    showIndicator = {this.state.newNotification}
                    tooltipText = {'Notifications'}
                >
                    <NotificationIcon className={'tabsForSidebar-icon'} />
                </TabButton>
            </div>
        );
    }

    handleClick = (value) => {
        this.setState ({
            chosenTab: value,
        });
    }

    findDefaultChosenTab = () => {
        let defaultTab = null;
        const disabledArray = this.props.disabledButtons;

        if (!disabledArray || disabledArray == null || disabledArray.length === 0) {
            defaultTab = 1;
        } else if (disabledArray.includes(1) && disabledArray.includes(2) && disabledArray.includes(3)) {
            defaultTab = 0;
        } else if (!disabledArray.includes(1)) {
            defaultTab = 1;
        } else if (!disabledArray.includes(2)) {
            defaultTab = 2;
        } else if (!disabledArray.includes(3)) {
            defaultTab = 3;
        } else {
            defaultTab = 1;
        };

        return defaultTab;
    }
}
