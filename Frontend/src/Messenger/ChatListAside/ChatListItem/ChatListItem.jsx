import React from 'react';
import classNames from 'classnames';
import { ButtonIconWithMenu } from '../../../UI kit/buttonIconWithMenu/ButtonIconWithMenu';
import { MoreInfoIcon } from '../../../icons/MoreInfoIcon';
import './chatListItem-style.css'

const dataForMenu = [
    { value: 1, text: 'О сотруднике'}, 
    { value: 2, text: 'Удалить диалог'}
];

export class ChatListItem extends React.Component {
    render() {
        return (
            <div 
                className={classNames('ChatListItem', this.props.selectedChat && 'ChatListItem-selectedChat')}
                onClick={this.handleChatClick}
            >
                <div className={'ChatListItem__menuButtonContainer'}>
                    <ButtonIconWithMenu
                        className = {'ChatListItem__menuButton'}
                        icon = {<MoreInfoIcon className={'ChatListItem__menuButtonIcon'}/>}
                        textForTooltip = {'Options'}
                        dataForDropDownMenu = {dataForMenu}
                	/>
                </div>

                <div className={'ChatListItem__userAvatar'}>
                    <img 
                        src={this.props.userAvatar ? this.props.userAvatar : this.randomAvatar2()} 
                        className={'ChatListItem__userAvatarImage'}
                    />
                </div>
                <div className={'ChatListItem__textBlock'}>
                    <div className={'ChatListItem__userInfoContainer'}>
                        <p className={'ChatListItem__userName'}>{this.props.userName}</p>
                        {this.props.userOnline && <div className={'ChatListItem__onlineIndicator'}></div>}
                    </div>
                    
                    <p className={'ChatListItem__dateTime'}>{this.formatMeta(this.props.messageMeta)}</p>
                    <p className={'ChatListItem__lastMessage'}>{this.props.lastMessage}</p>
                </div>
                
            </div>
        );
    }

    handleChatClick = () => {
        this.props.onChatClick(this.props.chatID);
    };

    formatMeta = (meta) => {
        const parsedMeta = new Date(meta);
        const year = parsedMeta.getFullYear();
        const month = parsedMeta.getMonth(); 
        const day = parsedMeta.getDate();

        const currentMeta = new Date();
        const currentYear = currentMeta.getFullYear();
        const currentMonth = currentMeta.getMonth();
        const currentDay = currentMeta.getDate();
        if (currentYear === year && currentMonth === month && currentDay === day) {
            const intlOptions = {hour:'2-digit', minute:'2-digit'};
            return Intl.DateTimeFormat('en-GB',intlOptions).format(parsedMeta);
        }
        const intlOptions = {year:'numeric', month:'short', day:'numeric'};
        return Intl.DateTimeFormat('en-GB',intlOptions).format(parsedMeta);
    };

    randomInt = (max) => Math.floor(Math.random() * max);
    // randomAvatar = () => {
    //     switch (this.randomInt(2)) {
    //         case 0:
    //             return '/images/avatars/Castiel.jpg';
    //         case 1:
    //             return '/images/avatars/Dean.jpg';
    //     }
    // };

    randomAvatar2 = () => [
        '/images/avatars/Cas.jpg',
        '/images/avatars/DeanTWO.jpg',
        '/images/avatars/Sammy.jpg',
        '/images/avatars/Misha.jpg',
    ][this.randomInt(4)];
}
