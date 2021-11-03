import React from 'react';
import { SendIcon } from '../../../icons/icons_24px/SendIcon';
import { PinFile } from '../../../icons/PinFile';
import { ButtonWithIcon } from '../../../UI kit/buttonWithIcon/ButtonWithIcon';
import './newMessageInput-style.css'

export class NewMessageInput extends React.Component {
    render() {
        return (
            <div className={'newMessageInput'}>
                <ButtonWithIcon
                    className={'newMessageInput__button newMessageInput__pinFileButton'}
                    icon={<PinFile className={'newMessageInput__icon newMessageInput__pinFileButtonIcon'}/>}
                    textForTooltip={'Pin file'}
                />
                <div className={'newMessageInput__textInpytContainer'}>
                    <textarea
                        className={'newMessageInput__textInpytArea'}
                        placeholder={' Напишие сообщение...'}
                        rows={4}
                    />
                </div>

                <ButtonWithIcon
                    className={'newMessageInput__button newMessageInput__SendButton'}
                    icon={<SendIcon className={'newMessageInput__icon newMessageInput__SendButtonIcon'}/>}
                />
            </div>
        );
    }
}
