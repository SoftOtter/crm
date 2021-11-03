import React from 'react';
import './selectList-style.css'

export class SelectList extends React.Component {
    render() {
        const items = this.props.listItems.map(
            x => <span
                key={x.value}
                className={'listItem inputForSelect-textWrap'}
                onClick={() => this.props.onClickItem(x.value)}
            >
                {x.text}
            </span>
        );
        return (
            <div className={'selectList-wrapper'}>
                <div className={'selectList'}>
                    {items}
                </div>
            </div>
        );
    }
}
