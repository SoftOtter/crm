import React from 'react';
import './selectListHeader-style.css'

export class SelectListHeader extends React.Component {
    render() {
        const items = this.props.listItems.map(
            x => <span
                key={x.value}
                className={'listItemHeader selectForHeader-textWrap'}
                onClick={() => this.props.onClickItem(x.value)}
            >
                {x.text}
            </span>
        );
        return (
            <div className={'selectListHeader'}>
                {items}
            </div>
        );
    }
}
