import React from 'react';
import './selectList-style.css'

class SelectList extends React.Component {
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
            <div className={'selectList'}>
                {items}
            </div>
        );
    }
}

export default SelectList;
