import React from 'react';
import ReactDOM from 'react-dom';
import { Messenger } from './Messenger/Messenger';
import './index-style.css';

class Crm extends React.Component {
    render() {
        return (
            <Messenger />
        );
        /*
        return (<>
            <Navigation />
            <div className='main-content'>
                <Header />
                <div className='main-and-aside-container'>
                    <Main />
                    <Sidebar />
                </div>
            </div>
        </>);
        */
    }
}

ReactDOM.render(<Crm />, document.getElementById('root'));