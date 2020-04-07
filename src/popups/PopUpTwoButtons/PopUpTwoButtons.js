import React from 'react';
import classNames from 'classnames';
import { MinorButton } from '../../UI kit/minorButton/MinorButton';
import { MajorButton } from '../../UI kit/majorButton/MajorButon';
import ButtonIcon from '../../UI kit/buttonIcon/ButtonIcon';
import { DeleteIcon } from '../../icons/DeleteIcon';
import '../PopUpTwoButtons/popUpTwoButtons-style.css'

export class PopUpTwoButtons extends React.Component {
    constructor (props) {
        super(props);

        this.backgroundRef = React.createRef();
    }
    render() {
        if (!this.props.isOpen) { return null; }

        return (
            <div 
                className={classNames('popUp__background')}
                ref={this.backgroundRef}
                onClick={this.handleBackgroundClick}
            >
                <div className={classNames('popUp')}>
                    <ButtonIcon
                        className={'popUp_closeButton'}
                        icon = {<DeleteIcon className={'iconForButton'}/>}
                        textForTooltip = {'Close'}
                        onClick={this.handleClickForClose}
                    />
                    <div className={classNames('popUp__headerWrapper')}>
                        <h3 className={classNames('popUp__header')}>{this.props.header}</h3>
                    </div>
                    <div className={classNames('popUp__contentWrapper')}>
                        {this.props.children}
                    </div>
                    <div className={classNames('popUp__buttonsWrapper')}>
                        {this.props.cancelButtonTitle && 
                            <MinorButton
                                className={'popUp__button'}
                                buttonText={this.props.cancelButtonTitle}
                                onClick={this.handleClickForClose}
                            />
                        }
                        
                        <MajorButton
                            className={'popUp__button'}
                            buttonText={this.props.submitButtonTitle}
                        />
                    </div>
                </div>
            </div>
        );
    }

    handleClickForClose = () => {
        this.props.closePopUp();
    }

    handleBackgroundClick = (event) => {
        if (event.target === this.backgroundRef.current) {
            this.handleClickForClose();
        }
    }
}
