import React from 'react';
import { CompactInput } from '../UI kit/compactInput/CompactInput';
import { ButtonWithIcon } from '../UI kit/buttonWithIcon/ButtonWithIcon';
import { MajorButton } from '../UI kit/majorButton/MajorButon';
import { EyeIcon } from '../icons/icons_20px/EyeIcon';
import classNames from 'classnames';
import '../Login/login-style.css';

export class Login extends React.Component {
    constructor (props) {
        super(props);

        this.state={
            showPassword: false,
        }
    }

    render() {
        return (
            <div className={'Login__background'}>
                <form className={'Login__form'} method={'post'} action={'/login'}>
                    <div className={'Login__header'}>
                        <img src={'/images/logo/Haier-Logo-PNG-Pic.png'} className={'Login__logo'} alt={'Haier logo'} />
                    </div>

                    <CompactInput
                        className={'Login__emailInput'}
                        label={'Ваша почта'}
                        error={''}
                        inputId={'emailInput'}
                        type={'email'}
                        name={'email'}
                    />

                    <CompactInput
                        className={'Login__passwordInput'}
                        label={'Ваш пароль'}
                        error = {''}
                        inputId={'passwordInput'}
                        icon={<EyeIcon className={classNames('Login__eyeIcon', this.state.showPassword && 'Login__eyeIcon-blue')}/>}
                        onClickIcon={this.handleEyeIconClick}
                        type={this.state.showPassword ? 'Login__eyeIcon-blue' : 'password'}
                        name={'password'}
                    />

                    <div className={'Login__buttonsWrapper'}>
                        <ButtonWithIcon
                            buttonText = {'Забыли пароль?'}
                            className={'Login__forgetPasswordButton'}
                        />

                        <MajorButton
                            className={'Login__logInButton'}
                            buttonText={'Вход'}
                            type={'submit'}
                        />
                    </div>
                </form>
            </div>
        );
    }

    handleEyeIconClick = () => {
        // change password input type

        this.setState({
            showPassword: !this.state.showPassword,
        })
    }
}
