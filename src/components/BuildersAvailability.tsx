import React from 'react'

import Builders from './Builders';
import MenuButton from "./MenuButton";

import './builders-availability.css';
import { IBuilderData } from '../dummy-data/builders-data';

interface IProps {
    data: IBuilderData[];
};

const BuildersAvailability: React.FC<IProps> = ( props ) => {

    const { data } = props;

    return (
        <div className="builders-availability-container">
            <MenuButton />
            <Builders data={data} />
        </div>
    )
}

export default BuildersAvailability;