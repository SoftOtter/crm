import React from 'react';
import MoreInfoIcon from '../icons/./MoreInfoIcon';
import './style.css';

class MyPeopleTile extends React.Component {
    render() {
        return (
            <div className='tiles my-people'>
				<div className='tiles-header'>
					<h2 className='tiles-title'>{this.props.title}</h2>
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
					<span className='full-name'>{this.props.fullName}</span>
					<span className='additional-info tel'>{this.props.tel}</span>
					<span className='additional-info email'>{this.props.email}</span>
				</div>
			</div>
        );
    }
}

export default MyPeopleTile;
