import React from 'react';
import { TickIcon } from '../../icons/TickIcon';
import './confirmAction-style.css'

export class ConfirmAction extends React.Component {
    render() {
        return (
            <div className={'ConfirmAction__background'}>
                <div class='ConfirmAction'>
                    <TickIcon className={'ConfirmAction__tickIcon'}/>
                    <span className={'ConfirmAction__text'}>{this.props.confirmText}</span>
                </div>
            </div>
            
        );
    }
}
