import React from 'react';
import { ButtonWithIcon } from '../../UI kit/buttonWithIcon/ButtonWithIcon';

class AllMessagesButton extends React.Component {
    render() {
        return (
            <div className='btn-all-messages-container'>
                <ButtonWithIcon
                    buttonText = {'Все сообщения'}
                    className={'btn-all-messages'}
                />
                
            </div>
        );
    }
}

export default AllMessagesButton;
