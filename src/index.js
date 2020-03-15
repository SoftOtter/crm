import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import Navigation from './Navigation/Navigation';
import Header from './Header/Header';
import Sidebar from './Sidebar/Sidebar';
import Main from './Main/Main';

class Crm extends React.Component {
    render() {
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
    }
}

ReactDOM.render(<Crm />, document.getElementById('root'));