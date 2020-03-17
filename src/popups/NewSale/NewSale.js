import React from 'react';
import Input from '../../UI kit/fields/Input';
import './newsale-style.css';
import ArrowDownIcon from '../../icons/ArrowDownIcon';
import TextArea from '../../UI kit/fields/TextArea';
import Select from '../../UI kit/select/Select';
import FieldForAmount from '../../UI kit/fieldForAmount/FieldForAmount.js';
import SearchIcon from '../../icons/SearchIcon';

class NewSale extends React.Component {
    render() {
        return (
            <div className={'NewSale__background'}>
                <div className={'NewSale'}>
                    <Input
                        label={'Field name'}
                        placeholder={'Enter smth'}
                        error={''}
                        icon={<SearchIcon />}
                    />

                    <Select />

                    <TextArea
                        label={'Textarea name'} 
                    />

                    <FieldForAmount 
                        label={'Amount'}
                        upperBound={10}
                    />
                </div>
            </div>
        );
    }
}

export default NewSale;
