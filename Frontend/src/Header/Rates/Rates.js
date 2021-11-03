import React from 'react';
import './rates-style.css'

class Rates extends React.Component {
    constructor (props) {
        super(props)
        this.currencyValue = window.currencyRate.Valute[props.rate].Value;
    }
    render() {
        const resultRate = this.currencyRound();
        return (
            <div className={'rate-wrapper'}>
                {this.props.currencyIcon}
                <span className={'currencyRate'}>
                    {resultRate}
                </span>
            </div>
        );
    }

    currencyRound = () => {
        return (
            (Math.round(this.currencyValue * 100)) / 100
        )
    }
}

export default Rates;
