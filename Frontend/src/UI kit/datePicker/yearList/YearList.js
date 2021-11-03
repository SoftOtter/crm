import React from 'react';
import classNames from 'classnames';
import './yearList-style.css'

export class YearList extends React.Component {
    constructor(props) {
        super(props);

        this.selectedYearRef = React.createRef();
    }

    render() {
        const years = [];

        for (let i = 1900; i < 2100; i++) {
            let focused = this.props.selectedYear === i;
            const yearBtn = 
                <button 
                    key={i}
                    className={classNames('YearList__yearButton', focused && 'YearList__yearButton-focused')}
                    onClick={() => this.handleClickYear(i)}
                    ref={focused && this.selectedYearRef}
                >
                    <span className={'YearList_yearButtonText'}>
                        {i}
                    </span>
                </button>;
            years.push(yearBtn);
        }

        return (
            <div className={classNames('YearList__visibleYears', this.props.className)}>
                <div className={'YearList'}>
                    {years}
                </div>
            </div>
        );
    }

    componentDidMount() {
        this.selectedYearRef.current.scrollIntoView({ block: 'center' });
    }

    handleClickYear = (year) => {
        this.props.pickYear(year);
    }
}
