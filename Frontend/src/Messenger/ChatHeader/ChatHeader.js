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
                    <span className={'ChatHeader__userName'}>Валерий Антонов</span>
                    <span className={'ChatHeader__onlineStatus'}>online</span>
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
