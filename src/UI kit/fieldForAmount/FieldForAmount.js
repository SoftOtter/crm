import React from 'react';
import classNames from 'classnames';
import './fieldForAmount-style.css';

class FieldForAmount extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            result: '0',
            disableMinus: false,
            disablePlus: false,
        };
    }

    static defaultProps = {
        classes: {}
    }

    render() {
        return (
            <div className={this.props.className}>
                <p className={'fieldForAmount-label'}>{this.props.label}</p>

                <div className={classNames('fieldForAmount-wrapper', (this.state.result > this.props.upperBound) && 'error', this.props.classes.wrapper)}>
                    <button 
                        className={classNames('amount-btn minus-btn', this.props.classes.button)} 
                        disabled={(this.state.result === '0') || (this.state.disableMinus)}
                        onClick={this.handleClickMinus}
                    >-</button>
                    <input 
                        className={classNames('amount-input', this.props.classes.input )}
                        value={this.state.result} 
                        onChange={this.onChangeResult}
                        onBlur={this.handleBlur}
                    />
                    <button 
                        className={classNames('amount-btn plus-btn', this.props.classes.button)}
                        onClick={this.handleClickPlus}
                        disabled={((this.state.result === this.props.upperBound) || this.state.disablePlus)}
                    >+</button>
                </div>
            </div>
        );
    }

    onChangeResult = (event) => {
        const val = event.target.value;
        let res = '';
        for (const c of val) {
            if (c >= '0' && c <= '9') {
                res += c;
            }
        }

        if (res > 0 && res < this.props.upperBound) {
            this.setState({
                disablePlus: false,
                disableMinus: false,
            });
        } else if (res >= this.props.upperBound) {
            this.setState({
                disablePlus: true,
                disableMinus: false,
            });
        } else {
            this.setState({
                disablePlus: false,
                disableMinus: true,
            });
        }

        this.setState({
            result: res,
        });        
    }

    handleClickMinus = () => {
        let minusCounter = this.state.result;
        if (!(minusCounter === '0')) {
            minusCounter--;

            this.setState({
                result: minusCounter,
                disablePlus: false,
            });
        } 
        
        if (minusCounter === 0) {
            this.setState({
                disableMinus: true,
            });
        }
    }

    handleClickPlus = () => {
        let plusCounter = this.state.result;
        this.setState({
            result: ++plusCounter,
            disableMinus: false,
        });

        if (plusCounter >= this.props.upperBound) {
            this.setState({
                disablePlus: true,
            });
        }
    }

    handleBlur = (event) => {
        const value = event.target.value;

        if (value === '') {
            this.setState({
                result: 0
            });
        }
    }

}

export default FieldForAmount;
