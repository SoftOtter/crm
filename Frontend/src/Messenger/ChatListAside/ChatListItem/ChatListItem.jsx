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
                    
                    <p className={'ChatListItem__dateTime'}>{this.formatMeta(this.props.metaMessage)}</p>
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
        const month = this.addZero(parsedMeta.getMonth() + 1); 
        const day = this.addZero(parsedMeta.getDate());

        const currentMeta = new Date();
        if (currentMeta.toISOString().slice(0,10) === parsedMeta.toISOString().slice(0,10)) {
            const hours = this.addZero(parsedMeta.getHours());
            const minutes = this.addZero(parsedMeta.getMinutes());
            return `${hours}:${minutes}`;
        }
        return `${day}.${month}.${year}`;
    };

    addZero = (num) => {
        if ((0 <= num) && (num < 10)) {
            return '0' + num;
        }
        return '' + num;
    }

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
