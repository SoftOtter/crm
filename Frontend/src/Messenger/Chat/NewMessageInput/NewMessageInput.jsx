import React from 'react';
import { SendIcon } from '../../../icons/icons_24px/SendIcon';
import { PinFile } from '../../../icons/PinFile';
import { ButtonWithIcon } from '../../../UI kit/buttonWithIcon/ButtonWithIcon';
import './newMessageInput-style.scss';

export class NewMessageInput extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            text: ''
        };
    }
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
                        value={this.state.text}
                        className={'newMessageInput__textInpytArea'}
                        placeholder={' Напишие сообщение...'}
                        rows={4}
                        onKeyPress={this.textareaKeyPressHandler}
                        onChange={this.textareaChangeHandler}
                    />
                </div>

                <ButtonWithIcon
                    className={'newMessageInput__button newMessageInput__SendButton'}
                    icon={<SendIcon className={'newMessageInput__icon newMessageInput__SendButtonIcon'}/>}
                />
            </div>
        );
    }

    textareaKeyPressHandler = (event) => {
        if (event.key === 'Enter' && event.shiftKey === false) {
            if (this.state.text.length > 0) {
                this.props.onEnterPress(this.state.text);
            }
            this.setState({
                text: ''
            });
        }
        
    }

    textareaChangeHandler = (event) => {
        if (event.target.value !== '\n') {
            this.setState({
                text: event.target.value
            });
        }
    }
}
