import React from 'react';
import { MiniaturePhoto } from './miniaturePhoto/MiniaturePhoto';
import './galleryForGoods-style.css'

export class GalleryForGoods extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            selectedId: this.props.dataForGallery[0].value,
        };
    }
    render() {
        const selectedImage = this.props.dataForGallery.find(dataItem => this.state.selectedId === dataItem.value);
        return (
            <div className={'GalleryForGoods__wrapper'}>
                {this.props.label &&
                    <p className={'GalleryForGoods__label'}>{this.props.label}</p>
                }
                <div className={'GalleryForGoods'}>
                    <div className={'GalleryForGoods__fullSizePhoto'}>
                        <img className={'GalleryForGoods__image'} src={selectedImage.path} alt=''/>
                    </div>
                    <MiniaturePhoto 
                        className={'GalleryForGoods__miniaturePhotoes'}
                        dataForGallery={this.props.dataForGallery}
                        onClickMiniature={this.handleClickMiniature}
                        selected={this.state.selectedId}
                    />
                </div>
            </div>
        );
    }
    handleClickMiniature = (imageId) => {
        if (this.state.selectedId !== imageId) {
            this.setState ({
                selectedId: imageId,
            })
        }
    }
}
