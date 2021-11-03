import React from 'react';
import classNames from 'classnames';
import { NewChatIcon } from '../../../../icons/icons_24px/NewChatIcon';
import { ButtonWithIcon } from '../../../../UI kit/buttonWithIcon/ButtonWithIcon';
import { ButtonIconWithMenu } from '../../../../UI kit/buttonIconWithMenu/ButtonIconWithMenu';
import './newChat-style.css';

export class NewChat extends React.Component {
    render() {
        return (
            <div className={classNames('NewChat', this.props.className)}>
                <ButtonWithIcon
                    className={'NewChat__button'}
                    icon={<NewChatIcon className={'NewChat__buttonIcon'}/>}
                    textForTooltip={'New chat'}
                />
            </div>
        );
    }
}
