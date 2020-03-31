import React from 'react';
import BackIcon from './icons/BackIcon';
import './projectSelect-style.css'
import { dataForSelectHeader } from '../../UI kit/selectForHeader/dataForSelectHeader';
import { SelectForHeader } from '../../UI kit/selectForHeader/SelectForHeader';

class ProjectSelect extends React.Component {
    render() {
        return (<>
            <SelectForHeader 
                dataForSelect = {dataForSelectHeader}
            />

            {/* <button className='btn-project-select'>
                <span>Проект 1</span>
                <BackIcon className='open-list-icon' />
            </button> */}

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
