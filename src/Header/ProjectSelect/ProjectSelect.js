import React from 'react';
import BackIcon from './icons/BackIcon';

class ProjectSelect extends React.Component {
    render() {
        return (<>
            <button className='btn-project-select'>
                <span>Проект 1</span>
                <BackIcon className='open-list-icon' />
            </button>

            {/*
            <div className='list-of-project hidden'>
                <button value='project2'>Проект 2</button>
                <button value='project3'>Проект 3</button>
            </div>
            */}
        </>);
    }
}

export default ProjectSelect;
