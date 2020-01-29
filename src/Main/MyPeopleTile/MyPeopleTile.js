import React from 'react';
import MoreInfoIcon from '../icons/./MoreInfoIcon';
import './style.css';

class MyPeopleTile extends React.Component {
    render() {
        return (
            <div className='tiles my-people coordinator'>
				<div className='tiles-header'>
					<h2 className='tiles-title'>Мой координатор</h2>
					<button className='btn-more'>
						<div className='more-info-icon'>
                            <MoreInfoIcon />
						</div>
					</button>
				</div>
				<div className='content'>
					<div className='user-icon-container'>
						<img className='user-icon' src='#' alt=''/>
					</div>
					<span className='full-name'>Петр Данилов</span>
					<span className='additional-info tel'>+7 921 333 44 55</span>
					<span className='additional-info email'>petyapetrov@mail.ru</span>
				</div>
			</div>
        );
    }
}

export default MyPeopleTile;
