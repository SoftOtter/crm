import React from 'react';
import classNames from 'classnames';
import { ArrowDownIcon } from '../../icons/ArrowDownIcon';
import './selectForHeader-style.css';
import { ArrowUpIcon } from '../../icons/ArrowUpIcon';
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
            <div className={this.props.className}>
                {this.props.label &&
                    <p className={'SelectForHeader__label'}>{this.props.label}</p>
                }
                <div
                    className={'SelectForHeader__wrapper'} 
                    onClick={this.handleClickWrapper} 
                    ref={this.wrapperDiv}
                >
                    <select 
                        className={'SelectForHeader__nativeSelect'}
                        value={this.state.selectedItem}
                    />
                    <div
                        className={classNames(
                            'SelectForHeader',
                            this.state.focused && 'SelectForHeader__focused'
                        )}
                    >
                    
                        <div className={'SelectForHeader__textWrap'}>
                            {selectedItem.text}
                        </div>

                        {this.state.focused 
                            ? <ArrowUpIcon className={'SelectForHeader__arrowIcon SelectForHeader__arrowUpIcon'} /> 
                            : <ArrowDownIcon className={'SelectForHeader__arrowIcon SelectForHeader__arrowDownIcon'} />
                        }
                        <div className={'SelectForHeader__cover'} />
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
