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
    constructor(props) {
        super(props);

        this.state = {
            openedChat: this.props.openedChat,
        };
    }
    render() {
        return (
            <div className={classNames('ChatListItem', this.state.openedChat && 'ChatListItem-openedChat')}>
                <div className={'ChatListItem__menuButtonContainer'}>
                    <ButtonIconWithMenu
                        className = {'ChatListItem__menuButton'}
                        icon = {<MoreInfoIcon className={'ChatListItem__menuButtonIcon'}/>}
                        textForTooltip = {'Options'}
                        dataForDropDownMenu = {dataForMenu}
                	/>
                </div>

                <div className={'ChatListItem__userAvatar'}></div>
                <div className={'ChatListItem__textBlock'}>
                    <div className={'ChatListItem__userInfoContainer'}>
                        <p className={'ChatListItem__userName'}>{this.props.userName}</p>
                        {this.props.userOnline && <div className={'ChatListItem__onlineIndicator'}></div>}
                    </div>
                    
                    <p className={'ChatListItem__dateTime'}>{this.props.metaMessage}</p>
                    <p className={'ChatListItem__lastMessage'}>{this.props.lastMessage}</p>
                </div>
                
            </div>
        );
    }
}
