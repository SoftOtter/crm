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

        this.wrapperDiv = React.createRef();
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
                <div className={'ChatListItem__userInfoContainer'}>
                    <span className={'ChatListItem__userName'}>Валерий Антонов</span>
                    <div className={'ChatListItem__onlineIndicator'}></div>
                </div>
                
                <div className={'ChatListItem__dateTime'}>сегодня 16:25</div>
                <p className={'ChatListItem__userMessage'}>Добрый день! Да, через 5 минут будет созвон.</p>
            </div>
        );
    }
}
