import React from 'react';
import classNames from 'classnames';
import './textArea-style.css';

class TextArea extends React.Component {
    static defaultProps = {
        classes: {}
    }
    render() {
        return (
            <div className={this.props.className}>
                <label htmlFor={this.props.id}>
                    <p className={'textArea-label'}>{this.props.label}</p>
                    <textarea 
                        className={classNames('textArea', this.props.classes.textArea)}
                        id={this.props.id}
                        placeholder={this.props.placeholder}
                        cols={10}
                        rows={3}
                    />
                </label>
            </div>
        );
    }
}

export default TextArea;
