import React from 'react';
import Input from '../../UI kit/fields/Input';
import './newsale-style.css';
import ArrowDownIcon from '../../icons/ArrowDownIcon';
import TextArea from '../../UI kit/fields/TextArea';

class NewSale extends React.Component {
    render() {
        return (
            <div className={'NewSale__background'}>
                <div className={'NewSale'}>
                    <Input
                        label={'Field name'}
                        placeholder={'Enter smth'}
                        error={'AAAAAAAAA!!!!!!111!!'}
                        icon={<ArrowDownIcon />}
                    />

                    <TextArea
                        label={"Textarea name"} 
                    />
                </div>
            </div>
        );
    }
}

export default NewSale;
