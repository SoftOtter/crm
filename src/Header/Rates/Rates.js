import React from 'react';

class Rates extends React.Component {
    render() {
        return (<>
            <div className='dollar-rate'>
                <span>$ 62.77</span>
            </div>
            <div className='euro-rate'>
                <span>€ 71.84</span>
            </div>
        </>);
    }
}

export default Rates;
