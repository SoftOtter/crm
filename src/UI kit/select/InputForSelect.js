import React from 'react';
import classNames from 'classnames';
import { ArrowDownIcon } from '../../icons/ArrowDownIcon';
import './inputForSelect-style.css';
import { ArrowUpIcon } from '../../icons/ArrowUpIcon';
import { SelectList } from './SelectList';

export class InputForSelect extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedItem: null,
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
                    <p className={'InputForSelect__label'}>{this.props.label}</p>
                }
                <div 
                    className={'InputForSelect__wrapper'} 
                    onClick={this.handleClickWrapper} 
                    ref={this.wrapperDiv}
                >
                    <select 
                        className={'InputForSelect_nativeSelect'}
                        value={this.state.selectedItem}
                    />
                    <div
                        className={classNames(
                            'InputForSelect',
                            this.state.focused && 'InputForSelect__focused'
                        )}
                    >
                        {this.state.selectedItem
                            ? (
                                <div className={'InputForSelect__textWrap'}>
                                    {selectedItem.text}
                                </div>
                            )
                            : (
                                <div className={'InputForSelect__placeholder InputForSelect__textWrap'}>
                                    {this.props.placeholder}
                                </div>
                            )
                        }
                        {this.state.focused 
                            ? <ArrowUpIcon className={'InputForSelect__arrowIcon InputForSelect__arrowUpIcon'} /> 
                            : <ArrowDownIcon className={'InputForSelect__arrowIcon InputForSelect__arrowDownIcon'} />
                        }
                        <div className={'InputForSelect__cover'} />
                    </div>

                    {this.state.focused &&
                        <SelectList
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
