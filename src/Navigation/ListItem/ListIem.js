import React from 'react';

class ListItem extends React.Component {
    render() {
        return (
            <li>
                <a href='#'>
                    {this.props.icon}
                    <span>{this.props.label}</span>
                </a>
            </li>
        );
    }
}

export default ListItem;
