import React from 'react';
import { MoreInfoIcon } from '../../icons/MoreInfoIcon';
import { SearchIcon } from '../../icons/SearchIcon';
import { ButtonIconWithMenu } from '../../UI kit/buttonIconWithMenu/ButtonIconWithMenu';
import { ButtonWithIcon } from '../../UI kit/buttonWithIcon/ButtonWithIcon';
import './chatHeader-style.css'

const dataForMenu = [
    { value: 1, text: 'О сотруднике'}, 
    { value: 2, text: 'Удалить диалог'}
];

export class ChatHeader extends React.Component {
    render() {
        return (
            <div className={'ChatHeader'}>
                <div className={'ChatHeader__userInfoContainer'}>
                    <div className={'ChatHeader__userAvatar'}>
                        <img 
                            src={this.props.selectedChatUser.avatar ? this.props.selectedChatUser.avatar : '/images/avatars/Sammy.jpg'} 
                            className={'ChatHeader__userAvatarImage'}
                        />
                    </div>
                    <div className='ChatHeader__userInfo'>
                        <span className={'ChatHeader__userName'}>
                            {this.props.selectedChatUser.userName}
                        </span>
                        <span className={'ChatHeader__onlineStatus'}>
                            {this.props.selectedChatUser.userOnline ? 'online' : 'offline'}
                        </span>
                    </div>
                    
                </div>
                <div className={'ChatHeader__buttonsContainer'}>
                    <ButtonWithIcon
                        className={'ChatHeader__button ChatHeader__buttonsContainer'}
                        icon={<SearchIcon className={'ChatHeader__buttonIcon ChatHeader__searchButtonIcon'}/>}
                        textForTooltip={'Search in current chat'}
                    />

                    {/* подумать над структурой компонента ButtonIconWithMenu, подсказка работает не совсем верно*/}
                    <ButtonIconWithMenu
                        className = {'ChatHeader__button ChatHeader__menuButton'}
                        icon = {<MoreInfoIcon className={'ChatHeader__buttonIcon ChatHeader__menuButtonIcon'}/>}
                        textForTooltip = {'Options'}
                        dataForDropDownMenu = {dataForMenu}
                	/>
                    
                </div>
            </div>
        );
    }
}
