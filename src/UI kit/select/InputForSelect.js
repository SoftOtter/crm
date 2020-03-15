import React from 'react';
import classNames from 'classnames';
import ArrowDownIcon from '../../icons/ArrowDownIcon';
import './inputForSelect-style.css';

class InputForSelect extends React.Component {
    render() {
        return (
            <div>
                <p className={'inputForSelect-label'}>{this.props.label}</p>
                <div
                    className={classNames(
                        'inputForSelect',
                        this.props.className,
                        this.props.focused && 'inputForSelect-focused'
                    )}
                    onClick={this.props.onClick}
                >
                    {this.props.selectedItem
                        ? (
                            <div>
                                {this.props.selectedItem}
                            </div>
                        )
                        : (this.props.placeholder &&
                            <div className={'inputForSelect-placeholder'}>
                                {this.props.placeholder}
                            </div>
                        )
                    }
                    <ArrowDownIcon />
                </div>
            </div>
        );
    }
}

export default InputForSelect;
