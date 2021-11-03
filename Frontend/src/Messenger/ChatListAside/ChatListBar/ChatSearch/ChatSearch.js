import React from 'react';
import classNames from 'classnames';
import { SearchIcon } from '../../../../icons/SearchIcon';
import Input from '../../../../UI kit/fields/Input';
import './chatSearch-style.css'

export class ChatSearch extends React.Component {
    render() {
        return (
            <div className={classNames('ChatSearch', this.props.className)}>
                <Input
                    className={'ChatSearch__searchInput'}
                    placeholder={'Search'}
                    icon={<SearchIcon className={'ChatSearch__searchInputIcon'}/>}
                />
            </div>
        );
    }
}
