import React from 'react'

import Builders from './Builders';

import './builders-availability.css';
import { IBuilderData } from '../dummy-data/builders-data';


interface IProps {
    data: IBuilderData[];
    handlePageTitle: Function;
};

const BuildersAvailability: React.FC<IProps> = ( props ) => {

    const { data } = props;
    const { handlePageTitle } = props;

    return (
        <div className="builders-availability-container">
            <Builders data={data} pageTitleHandler={ handlePageTitle }/>
        </div>
    )
}

export default BuildersAvailability;