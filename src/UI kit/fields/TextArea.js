import React from 'react';
import classNames from 'classnames';
import './textArea-style.css';

class TextArea extends React.Component {
    render() {
        return (
            <label htmlFor={this.props.id}>
                <p className={'textArea-label'}>{this.props.label}</p>
                <textarea className={classNames('textArea', this.props.className)}
                    id={this.props.id}
                    placeholder={this.props.placeholder}
                />
            </label>
        );
    }
}

export default TextArea;
