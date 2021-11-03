import React from 'react';
import { InputForSelect } from './InputForSelect';
import { dataForSelect } from './dataForSelect';

class Select extends React.Component {
    render() {
        return (
            <InputForSelect
                label={'Select name'}
                placeholder={'Не выбрано'}
                dataForSelect={dataForSelect}
            />
        );
    }
}

export default Select;
