import React, { useEffect } from 'react';

import Fullstack from './Fullstack';
import Frontend from './Frontend';
import Backend from './Backend';
import { IBuilderData } from '../dummy-data/builders-data';


interface IProps {
    data: IBuilderData[];
    pageTitleHandler: Function;
};

const Builders: React.FC<IProps> = (props) => {

    const { data } = props;
    const { pageTitleHandler } = props;

    useEffect( () => {
        pageTitleHandler("Builders")
    })

    return (
        <div className="builders-container">
            <Fullstack data={data} />
            <Frontend data={data} />
            <Backend data={data} />
        </div>
    )
}

export default Builders;