import React from 'react';
import { PopUpTwoButtons } from '../PopUpTwoButtons/PopUpTwoButtons';
import { MinorButton } from '../../UI kit/minorButton/MinorButton';
import { dataForSelect_typeOfGoods } from '../../data/data/dataForSelect_typeOfGoods';
import { InputForSelect } from '../../UI kit/select/InputForSelect';
import { dataForSelect_modelOfGoods_fridges } from '../../data/data/dataForSelect_modelOfGoods_fridges';
import { dataForSelect_categoryOfGoods_bigAppliances } from '../../data/data/dataForSelect_categoryOfGoods_bigAppliances';
import FieldForAmount from '../../UI kit/fieldForAmount/FieldForAmount';
import Input from '../../UI kit/fields/Input';
import { SelectForHeader } from '../../UI kit/selectForHeader/SelectForHeader';
import { dataForTypeOfCurrency } from '../../data/dataForTypeOfCurrency';
import TextArea from '../../UI kit/fields/TextArea';
import { GalleryForGoods } from '../../UI kit/galleryForGoods/GalleryForGoods';
import { dataForGoodsPhotoes_two } from '../../data/dataForGoodsPhotoes_two';
import './addNewSale-style.css'

export class AddNewSale extends React.Component {
    render() {
        return (
            <PopUpTwoButtons
				header={'Новая продажа'}
				cancelButtonTitle={'Отмена'}
				submitButtonTitle={'Добавить'}
				isOpen={this.props.isOpen}
				closePopUp={this.props.closePopUp}
			>
                <MinorButton
                    className={'AddNewSale__bonusButton'}
                    buttonText={'Бонус 3,00 %'}
                />

                <div className={'AddNewSale__goodsInfo'}>
                    <InputForSelect
                        className={'AddNewSale__goodsInfoSelect'}
                        label={'Тип товара'}
                        placeholder={'Не выбрано'}
                        dataForSelect={dataForSelect_typeOfGoods}
                    />

                    <InputForSelect
                        className={'AddNewSale__goodsInfoSelect'}
                        label={'Категори товара'}
                        placeholder={'Не выбрано'}
                        dataForSelect={dataForSelect_categoryOfGoods_bigAppliances}
                    />

                    <InputForSelect
                        className={'AddNewSale__goodsInfoSelect'}
                        label={'Модель'}
                        placeholder={'Не выбрано'}
                        dataForSelect={dataForSelect_modelOfGoods_fridges}
                    />
                </div>

                <div className={'AddNewSale__devider'}></div>

                <div className={'AddNewSale__salesInfo'}>
                    {/* DATA PICKER WILL ADDING LATER*/}
                    <Input
                        className={'AddNewSale__salesInfoDataPicker'}
                        label = {'Дата'}
                        placeholder = {'Enter smth'}
                    />

                    <FieldForAmount
                        className={'AddNewSale__salesInfoAmountInput'}
                        label = {'Количество'}
                        upperBound = {10}
                        classes={{
                            wrapper: 'AddNewSale__salesInfoAmountInput-height',
                            button: 'AddNewSale__salesInfoAmountInput-buttonWidth',
                            input: 'AddNewSale__salesInfoAmountInput-inputWidth'
                        }}
                    />

                    <Input
                        className={'AddNewSale__salesInfoPriceInput'}
                        label = {'Цена реализации'}
                        placeholder = {'Enter smth'}
                    />

                    <SelectForHeader
                        className={'AddNewSale__salesInfoCurrencySelect'}
                        dataForSelect = {dataForTypeOfCurrency}
                    />
                </div>

                <div className={'AddNewSale__additionalInfo'}>
                    {/* PHOTOES */}
                    <GalleryForGoods
                        className={'AddNewSale__additionalInfoGallery'}
                        label={'Фото'}
                        dataForGallery = {dataForGoodsPhotoes_two}
                    />

                    <TextArea
                        className={'AddNewSale__additionalInfoSallerComment'}
                        label = {'Комментарий'}
                        classes={{
                            textArea: 'AddNewSale__additionalInfo-sizes',
                        }}
                    />
                </div>
			</PopUpTwoButtons>
        );
    }
}
