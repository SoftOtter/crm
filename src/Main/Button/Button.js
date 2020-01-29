import React from 'react';
import './Button-style.css';

class Button extends React.Component {
    render() {
        const classname = this.getClassName();

        return (
            <button className={classname}>{this.props.children}</button>
        );
    }

    getClassName() {
        let classname = '';
        if (this.props.type === 'filled') {
            classname = 'Button_blue'
        }
        else {
            classname = 'Button_white'
        }
        classname = 'Button ' + classname;
        if (this.props.className) {
            classname += ' ' + this.props.className;
        }
        return classname;
    }
}

export default Button;
