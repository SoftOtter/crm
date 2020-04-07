import React from 'react';
import classNames from 'classnames';
import './miniaturePhoto-style.css'
import { WideArrowDown } from '../../../icons/WideArrowDown';
import { WideArrowUp } from '../../../icons/WideArrowUp';

const visibleMiniatureAmount = 4;

export class MiniaturePhoto extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            scrollPosition: 0,
        };
    }

    render() {
        const photoes = this.props.dataForGallery.map(
            (x, index) => {
                const isSelected = x.value === this.props.selected;
                return (
                    <div
                        key={x.value}
                        className={classNames(
                            'MiniaturePhoto',
                            isSelected && 'MiniaturePhoto__selected',
                            !isSelected && 'MiniaturePhoto__notSelected'
                        )}
                        onClick={() => this.handleClickPhoto(x.value, index)}

                    >
                        <img
                            className={'MiniaturePhoto__image'}
                            src={x.path}
                            alt={'Mini_photo Of product'}
                        />
                    </div>
                );
        });
        const newTopPosition = 5 - this.state.scrollPosition * 72;
        const photoesAmount = this.props.dataForGallery.length;

        let upArrow = null;
        let downArrow = null;

        if (photoesAmount > visibleMiniatureAmount) {
            if (this.state.scrollPosition > 0) {
                upArrow = (
                    <div 
                        className={'MiniaturePhoto__arrow MiniaturePhoto__arrowUp'}
                        onClick={this.handleClickScrollUp}
                    >
                        <WideArrowUp className={'MiniaturePhoto__arrowIcon'} />
                    </div>
                )
            }

            if (this.state.scrollPosition < (photoesAmount - visibleMiniatureAmount)) {
                downArrow = (
                    <div 
                        className={'MiniaturePhoto__arrow MiniaturePhoto__arrowDown'}
                        onClick={this.handleClickScrollDown}
                    >
                        <WideArrowDown className={'MiniaturePhoto__arrowIcon'}/>
                    </div>
                )
            }
        }

        return (
            <div className={'MiniaturePhoto__wrapper'}>
                {upArrow}
                {downArrow}
                
                <div className={'MiniaturePhoto__photoesVisible'}>
                    <div 
                        className={'MiniaturePhoto__photoesWrapper'}
                        style={{top: newTopPosition}}
                    >
                        {photoes}
                    </div>
                </div>
            </div>
        );
    }

    handleClickScrollUp = () => {
        this.setState({
            scrollPosition: this.state.scrollPosition - 1,
        })
    }

    handleClickScrollDown = () => {
        this.setState({
            scrollPosition: this.state.scrollPosition + 1,
        })
    }

    handleClickPhoto = (photoId, photoIndex) => {
        const lastVisibleIndex = this.state.scrollPosition + (visibleMiniatureAmount - 1);
        const firstVisibleIndex = this.state.scrollPosition;
        const lastPhoto = this.props.dataForGallery.length - visibleMiniatureAmount;
        const firstPhoto = 0;
        
        if ((photoIndex === lastVisibleIndex) && (this.state.scrollPosition !== lastPhoto)) {
            this.handleClickScrollDown();
        }
        if ((photoIndex === firstVisibleIndex) && (this.state.scrollPosition !== firstPhoto)) {
            this.handleClickScrollUp();
        }
        

        this.props.onClickMiniature(photoId);
    }
}
