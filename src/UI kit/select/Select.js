import React from 'react';
import ArrowDownIcon from '../../icons/ArrowDownIcon';
import SelectList from './SelectList';
import InputForSelect from './InputForSelect';

class Select extends React.Component {
    render() {
        return (<>
            <InputForSelect
                label={'Select name'}
                placeholder={'Не выбрано'}
                onClick={this.handleClick}
            />

            <SelectList />
        </>);
    }

    handleClick = (event) => {
        debugger;

    }
}

export default Select;
