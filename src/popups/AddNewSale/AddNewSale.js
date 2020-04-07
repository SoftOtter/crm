import React from 'react';
import './addNewSale-style.css'
import { PopUpTwoButtons } from '../PopUpTwoButtons/PopUpTwoButtons';
import { MinorButton } from '../../UI kit/minorButton/MinorButton';
import { dataForSelect_typeOfGoods } from '../../data/data/dataForSelect_typeOfGoods';
import { InputForSelect } from '../../UI kit/select/InputForSelect';
import { dataForSelect_categoryOfGoods_fridges } from '../../data/data/dataForSelect_categoryOfGoods_fridges';
import { dataForSelect_modelOfGoods_fridges } from '../../data/data/dataForSelect_modelOfGoods_fridges';
import { dataForSelect_categoryOfGoods_bigAppliances } from '../../data/data/dataForSelect_categoryOfGoods_bigAppliances';
import FieldForAmount from '../../UI kit/fieldForAmount/FieldForAmount';
import Input from '../../UI kit/fields/Input';
import { SelectForHeader } from '../../UI kit/selectForHeader/SelectForHeader';
import { dataForTypeOfCurrency } from '../../data/dataForTypeOfCurrency';
import TextArea from '../../UI kit/fields/TextArea';

export class AddNewSale extends React.Component {
    render() {
        return (
            <PopUpTwoButtons
				header={'Новая продажа'}
				cancelButtonTitle={'Отмена'}
				submitButtonTitle={'Добавить'}
				isOpen={this.state.isPopUpOpen}
				closePopUp={this.closePopUp}
			>
                <MinorButton
                    buttonText={'Бонус 3,00 %'}
                />

                <div className={'AddNewSale__goodsInfo'}>
                    <InputForSelect
                        label={'Тип товара'}
                        placeholder={'Не выбрано'}
                        dataForSelect={dataForSelect_typeOfGoods}
                    />

                    <InputForSelect
                        label={'Категори товара'}
                        placeholder={'Не выбрано'}
                        dataForSelect={dataForSelect_categoryOfGoods_bigAppliances}
                    />

                    <InputForSelect
                        label={'Модель'}
                        placeholder={'Не выбрано'}
                        dataForSelect={dataForSelect_modelOfGoods_fridges}
                    />
                </div>

                <div className={'AddNewSale__devider'}></div>

                <div className={'AddNewSale__salesInfo'}>
                    {/* DATA PICKER */}
                    <Input
                        label = {'Дата'}
                        placeholder = {'Enter smth'}
                        error = {'Error!'}
                    />

                    <FieldForAmount
                        label = {'Количество'}
                        upperBound = {10}
                    />

                    <Input
                        label = {'Цена реализации'}
                        placeholder = {'Enter smth'}
                        error = {'Error!'}
                    />

                    <SelectForHeader
                        dataForSelect = {dataForTypeOfCurrency}
                    />
                </div>

                <div className={'AddNewSale__additionalInfo'}>
                    {/* PHOTOES */}

                    <TextArea
                        label = {'Комментарий продавца'} 
                    />
                </div>
			</PopUpTwoButtons>
        );
    }
}
