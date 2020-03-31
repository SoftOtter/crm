import React from 'react';
import Input from '../../UI kit/fields/Input';
import './newsale-style.css';
import TextArea from '../../UI kit/fields/TextArea';
import Select from '../../UI kit/select/Select';
import FieldForAmount from '../../UI kit/fieldForAmount/FieldForAmount.js';
import SearchIcon from '../../icons/SearchIcon';
import ButtonIcon from '../../UI kit/buttonIcon/ButtonIcon.js';
import MoreInfoIcon from '../../icons/MoreInfoIcon';
import TabsForSidebar from '../../UI kit/tabsForSidebar/TabsForSidebar';
import { InputForSelect } from '../../UI kit/select/InputForSelect.js';
import { dataForSelect } from '../../UI kit/select/dataForSelect';
import { SelectForHeader } from '../../UI kit/selectForHeader/SelectForHeader.js';
import { dataForSelectHeader } from '../../UI kit/selectForHeader/dataForSelectHeader';
import { ButtonWithIcon } from '../../UI kit/buttonWithIcon/ButtonWithIcon';
import { AddIcon } from '../../icons/AddIcon';
import { MinorButton } from '../../UI kit/minorButton/MinorButton';
import { MajorButton } from '../../UI kit/majorButton/MajorButon';
import Rates from '../../Header/Rates/Rates';
import { DollarIcon } from '../../icons/DollarIcon';
import { EuroIcon } from '../../icons/EuroIcon';

class NewSale extends React.Component {
    render() {
        return (
            <div className = {'NewSale__background'}>
                <div className = {'NewSale'}>
                    <Input
                        label = {'Field name'}
                        placeholder = {'Enter smth'}
                        error = {''}
                        icon = {<SearchIcon />}
                    />

                    <InputForSelect
                        label = {'Select name'}
                        placeholder = {'Не выбрано'}
                        dataForSelect = {dataForSelect}
                    />

                    <TextArea
                        label = {'Textarea name'} 
                    />

                    <FieldForAmount 
                        label = {'Amount'}
                        upperBound = {10}
                    />

                    <ButtonIcon 
                        icon = {<MoreInfoIcon className={'iconForButton'}/>}
                        textForTooltip = {'What are you doing??'}
                    />

                    <TabsForSidebar disabledButtons = {[]} />

                    <SelectForHeader 
                        label = {'Select for project'}
                        dataForSelect = {dataForSelectHeader}
                    />

                    <ButtonWithIcon 
                        icon = {<AddIcon className={'iconForBtnWithIcon'}/>}
                        buttonText = {'Добавить точку'}
                    />

                    <MinorButton 
                        icon = {<AddIcon className={'iconForBtnWithIcon'}/>}
                        buttonText = {'Добавить'}
                    />

                    <MajorButton
                        icon = {<AddIcon className={'iconForMajorButton'}/>}
                        buttonText = {'Добавить'}
                    />
                </div>
            </div>
        );
    }
}

export default NewSale;
