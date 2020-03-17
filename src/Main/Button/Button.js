import React from 'react';
import './button-style.css';

class Button extends React.Component {
    render() {
        const { type, className, children, ...rest } = this.props;
        const classes = this.getClassName();

        return (
            <button className={classes} {...rest}>{this.props.children}</button>
        );
    }

    getClassName() {
        let defaultClasses = '';
        if (this.props.type === 'filled') {
            defaultClasses = 'Button_blue'
        }
        else {
            defaultClasses = 'Button_white'
        }
        defaultClasses = 'Button ' + defaultClasses;
        if (this.props.className) {
            defaultClasses += ' ' + this.props.className;
        }
        return defaultClasses;
    }
}

export default Button;
