import React from 'react';
import classNames from 'classnames';
import './miniaturePhoto-style.css'
import { WideArrowDown } from '../../../icons/WideArrowDown';
import { WideArrowUp } from '../../../icons/WideArrowUp';

export class MiniaturePhoto extends React.Component {
    render() {
        const photoes = this.props.dataForGallery.map(
            x => {
                const isSelected = x.value === this.props.selected;
                return (
                    <div
                        key={x.value}
                        className={classNames(
                            'MiniaturePhoto',
                            isSelected && 'MiniaturePhoto__selected',
                            !isSelected && 'MiniaturePhoto__notSelected'
                        )}
                        onClick={() => this.props.onClickMiniature(x.value)}
                    >
                        <img
                            className={'MiniaturePhoto__image'}
                            src={x.path}
                            alt={'Mini_photo Of product'}
                        />
                    </div>
                );
        });
        return (
            <div className={'MiniaturePhoto__wrapper'}>
                <WideArrowUp className={'MiniaturePhoto__arrow MiniaturePhoto__arrowUp'} />
                <div className={'MiniaturePhoto__photoesVisible'}>
                    <div className={'MiniaturePhoto__photoesWrapper'}>
                        {photoes}
                    </div>
                </div>
                <WideArrowDown className={'MiniaturePhoto__arrow MiniaturePhoto__arrowDown'}/>
            </div>
        );
    }
}
