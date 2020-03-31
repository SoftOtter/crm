import React from 'react';
import classNames from 'classnames';
import ArrowDownIcon from '../../icons/ArrowDownIcon';
import './selectForHeader-style.css';
import ArrowUpIcon from '../../icons/ArrowUpIcon';
import { SelectListHeader } from './SelectListHeader.js';

export class SelectForHeader extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedItem: props.dataForSelect[0].value,
            focused: false,
        };

        this.wrapperDiv = React.createRef();

        window.addEventListener('click', this.handleClickOutside);
    }

    componentWillUnmount() {
        window.removeEventListener('click', this.handleClickOutside);
    }

    render() {
        const selectedItem = this.props.dataForSelect.find(
            dataItem => dataItem.value === this.state.selectedItem);

        return (
            <div>
                {this.props.label &&
                    <p className={'selectForHeader-label'}>{this.props.label}</p>
                }
                <div
                    className={'selectForHeader-wrapper'} 
                    onClick={this.handleClickWrapper} 
                    ref={this.wrapperDiv}
                >
                    <div
                        className={classNames(
                            'selectForHeader',
                            this.props.className,
                            this.state.focused && 'selectForHeader-focused'
                        )}
                    >
                    
                        <div className={'selectForHeader-textWrap'}>
                            {selectedItem.text}
                        </div>

                        {this.state.focused 
                            ? <ArrowUpIcon className={'arrow-icon arrowUp-icon'} /> 
                            : <ArrowDownIcon className={'arrow-icon arrowDown-icon'} />
                        }
                        <div className={'selectForHeader-cover'} />
                    </div>

                    {this.state.focused &&
                        <SelectListHeader
                            listItems={this.props.dataForSelect}
                            onClickItem={this.handleClickItem}
                        />
                    }
                </div>
            </div>
        )
    }

    handleClickItem = (value) => {
        this.setState({
            selectedItem: value
        });
    };

    handleClickWrapper = () => {
        this.setState({
            focused: !this.state.focused,
        });
    };

    handleClickOutside = (event) => {
        if (!this.wrapperDiv.current.contains(event.target))
        {
            this.setState({
                focused: false
            });
        }
    }
}
