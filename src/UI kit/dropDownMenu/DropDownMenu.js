import React from 'react';
import './dropDownMenu-style.css'
import classNames from 'classnames';

export class DropDownMenu extends React.Component {
    constructor(props) {
        super(props);

        window.addEventListener('click', this.props.closeMenuOutside);
    }

    componentWillUnmount() {
        window.removeEventListener('click', this.props.closeMenuOutside);
    }

    render() {
        const items = this.props.dropDownItems.map(
            x =>
                <div
                    key={x.value}
                    className={classNames('dropDownItem-wrapper', this.props.onHoverUserMenu)}
                    onClick={() => this.props.closeMenu(x.value)}
                >
                    {x.icon &&
                        <x.icon className={'dropDownIcon'} />
                    }
                    <span className={'dropDownItem inputForSelect-textWrap'}>
                        {x.text}
                    </span>
                </div>
        );
        return (
            <div className={classNames('dropDown-wrapper', this.props.className)}> 
                <div className={'dropDown'}>
                    {items}
                </div>
            </div>
        );
    }
}
