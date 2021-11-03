import React from 'react';
import ReactDOM from 'react-dom';
import { Login } from './Login/Login';
import './index-style.css';

class Crm extends React.Component {
    render() {
        return (
            <Login />
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