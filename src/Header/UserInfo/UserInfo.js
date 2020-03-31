import React from 'react';
import { dataForUserMenu } from '../../UI kit/dropDownMenu/dataForUserMenu';
import { DropDownMenu } from '../../UI kit/dropDownMenu/DropDownMenu';
import classNames from 'classnames';

export class UserInfo extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            onFocus: false,
        };
        this.wrapperDiv = React.createRef();
    }

    render() {
        return ( 
            <div className={'user-info-wrapper'} ref={this.wrapperDiv}>
                <div 
                    className={classNames('user-info', this.state.onFocus && 'userMenuFocused')}
                    onClick = {this.handleClick}
                >
                    <div className='user-icon-container'>
                        <img className='user-icon' src='#' alt='' />
                    </div>
                    <div className='info'>
                        <span className='full-name'>Максим Саяпин</span>
                        <br/>
                        <span className='position'>продавец</span>
                    </div>
                </div>

                {this.state.onFocus &&
                    <DropDownMenu
                        className={'userDropDownMenu'}
                        dropDownItems={dataForUserMenu}
                        closeMenuOutside={this.handleClickOutside}
                        onHoverUserMenu={'onHoverUserMenu'}
                    />
                }
            </div>
        );
    }

    handleClick = () => {
        this.setState({
            onFocus: !this.state.onFocus,
        })
    }

    handleClickOutside = (event) => {
        if (!this.wrapperDiv.current.contains(event.target)){
            this.setState({
                onFocus: false,
            })
        }
    }
}
